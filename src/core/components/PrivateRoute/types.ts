import { RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {
  component: React.ComponentType<RouteProps>;
}
