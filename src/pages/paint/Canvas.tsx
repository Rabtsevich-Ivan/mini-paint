import React, { useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../firebase';
import { useAuth } from '../../core/contexts/AuthContext';

export default function Canvas() {
    const { currentUser } = useAuth();

    useEffect(() => {
        //Canvas Conditional
        const isPaint = true;

        /* Canvas Basic Drawing*/
        const canvas: any = document.querySelector('#canvas');
        // Choose context(ctx) - 2D or 3D
        const ctx: any = canvas.getContext('2d');

        //Resizing
        canvas.height = 800;
        canvas.width = 800;

        //ctx.strokeStyle 
        //ctx.lineWidth

        //Vars
        let painting = false;
        let controlType = "Brush";
        let initialX: any, initialY: any;

        //Dom Vars
        const clearBtn = document.querySelector("#canvas-clear");
        const saveBtn = document.querySelector("#canvas-save");
        const brushWidth = document.querySelector("#brush-width");
        const brushColor = document.querySelector("#brush-color");
        //Dom Control Vars
        const brush = document.querySelector("#brush");
        const eraser = document.querySelector("#eraser");
        const line = document.querySelector("#line");
        const circle = document.querySelector("#circle");
        const rectangle = document.querySelector("#rectangle");

        //Tools Controls
        (brush as HTMLElement).onclick = (e: any) => {
            controlType = "Brush"
        };
        (eraser as HTMLElement).onclick = (e: any) => {
            controlType = "Eraser"
        };
        (line as HTMLElement).onclick = (e: any) => {
            controlType = "Line"
        };
        (circle as HTMLElement).onclick = (e: any) => {
            controlType = "Circle"
        };
        (rectangle as HTMLElement).onclick = (e: any) => {
            controlType = "Rectangle"
        };

        //Canvas Save, Clear
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        })
        saveBtn.addEventListener('click', () => {
            canvas.toBlob((blob: any) => {
                let img = new Image();
                img.src = blob;

                //Storage
                const imageName = prompt('Please give name to your creation!', "great(not) image");
                const storageRef = projectStorage.ref(imageName);
                const collectionRef = projectFirestore.collection('images');
                storageRef.put(blob).on('state_changed', async () => {
                    const url = await storageRef.getDownloadURL();
                    const createdAt = timestamp();
                    collectionRef.add({ user: currentUser.email, createdAt, url });
                });
            })
        })

        //Check if mouse within canvas
        function startPosition(e: any) {
            painting = true;

            const pos = getMousePos(canvas, e);
            initialX = pos.x;
            initialY = pos.y;

            draw(e);
        }
        function finishedPosition() {
            painting = false;
            ctx.beginPath();
        }
        function outsidePosition() {
            painting = false;
        }

        //Get mouse Position
        function getMousePos(canvas: any, evt: any) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }

        //Drawing with brush
        function draw(e: any) {
            const pos = getMousePos(canvas, e);
  
            ctx.lineCap = "round";
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }
        //Drawing Line
        function drawLine(e: any) {
            const pos = getMousePos(canvas, e);

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            ctx.moveTo(initialX, initialY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }

        //Drawing Reactangle
        function drawRectangle(e: any) {
            const pos = getMousePos(canvas, e);

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(initialX, initialY, pos.x - initialX, pos.y - initialY);
        }

        //Drawing Circle
        function drawCircle(e: any) {
            const pos = getMousePos(canvas, e);
            const radius = Math.sqrt(Math.pow((initialX - pos.x), 2) + Math.pow((initialY - pos.y), 2))

            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(initialX, initialY, radius, 2 * Math.PI, false);
            ctx.stroke();
        }

        //EventListeners
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishedPosition);
        //canvas.addEventListener('mouseout', outsidePosition);
        canvas.addEventListener('mousemove', (e: any) => {
        if(!painting) return;
            ctx.strokeStyle = (brushColor as HTMLInputElement).value;
            ctx.fillStyle = (brushColor as HTMLInputElement).value;
            ctx.lineWidth = (brushWidth as HTMLInputElement).value;

            switch(controlType) {
                case "Eraser":  
                    ctx.strokeStyle = "white";
                    draw(e);
                    break;
                case "Brush":
                    draw(e)
                    break;
                case "Line":
                    drawLine(e);
                    break;
                case "Rectangle":
                    ctx.lineWidth = 1;
                    drawRectangle(e);
                    break;
                case "Circle":
                    drawCircle(e);
                    break;
            }
            return;
        });
        /* END of Canvas Basic Drawing*/
    });
      
    return (
        <canvas id="canvas"></canvas>
    )
}
