import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../core/components/Header/Header';
import { projectFirestore, projectStorage } from '../../firebase';
import { useAuth } from '../../core/contexts/AuthContext';

const HomePage: FC = () => {
    //Create Array of objects which get ID and imageURL from database
    const [docs, setDocs] = useState([]);
    const { currentUser } = useAuth();
    
    //Get data for array of objects from firestore
    useEffect(() => {
        const unsub = projectFirestore.collection('images')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents:Array<any> = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            })
        return () => {
            //cleanup
            unsub();
        };
    }, []);

    //Condition for Header to render link to paint or home page
    const isPaintPage = false;

    return (
        <div>
            <Header condition={isPaintPage} />
            <main>
                <div className="container">
                    <div className="grid-wrap">
                        {
                            docs && docs
                            .filter(doc => doc.user === currentUser.email)
                            .map(doc => (
                                <div className="img-wrap" key={doc.id}>
                                    <img src={doc.url} alt="pic from firebase" />
                                </div>
                            ))
                        }
                        <div className="img-wrap"></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;

