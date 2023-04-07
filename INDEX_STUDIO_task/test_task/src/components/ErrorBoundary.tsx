import {Component, ReactNode} from "react";
import ErrorMessage from "./ErrorMessage";

interface Props {
    children: ReactNode;
}
class ErrorBoundary extends Component<Props>{

    state={
        error:null
    };

    static getDerivedStateFromError(error: any){
        return {error};
    }

    render() {
        const {error} = this.state;
        if(error){
            return(
                <ErrorMessage/>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;