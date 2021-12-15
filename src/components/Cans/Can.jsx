import React from "react";

class Can extends React.Component {
    constructor(props) {
        super(props);
        this.state = { NameOfCan: " ", arrayOfCans: [] };
        this.TextStore = this.TextStore.bind(this);
        this.ClickButton = this.ClickButton.bind(this);
    }

    TextStore(event) {
        console.log(event.target.value);
        this.setState({ text: event.target.value });
    }
    ClickButton() {
        const inp = document.getElementById("inputIdCan");
        this.setState({ NameOfCan: inp.value });
        this.state.arrayOfCans.push(inp.value);
        inp.value = " ";
    }
    render() {
        return (
            <div className="addVegStyle">
                <h1> Add Can</h1>
                <input id="inputIdCan" />
                <button onClick={this.ClickButton}>Click Here</button>
                <p>{this.state.NameOfCan}</p>
                <ul>
                    {this.state.arrayOfCans.map((veg) => {
                        return <li>{veg}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default Can;