import React, {PureComponent} from 'react';
import './App.css';
import mainLogo from './cat.png';

class App extends PureComponent {

    componentDidMount() {
        window.addEventListener("mousemove", this.handleCursor);
    }

    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        document.removeEventListener("mousemove", this.handleCursor);
    }

    
    handleCursor = (e) => {
        const cat = document.getElementsByClassName('cat')[0];
        /*       cat.style.transform = `translateY(${e.clientY - 25}px)`;
               cat.style.transform += `translateX(${e.clientX - 25}px)`;*/
        setTimeout(() => {
            cat.setAttribute('style', 'top:' + e.clientY + 'px; left:' + e.clientX + 'px;');
        }, 500);
    }

    render() {

        return (
            <>
                <div>
                    <img className='cat' src={mainLogo} alt="cat"/>
                </div>
            </>
        );
    }
}

export default App;
