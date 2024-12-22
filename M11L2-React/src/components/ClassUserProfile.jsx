// File for User Profile Class Component; Part 1, Task 1

// Example Code
// class UserProfile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: 'Alex' };
//     }

//     // Incorrect Function
//     changeName() {
//         this.state.name = 'Charlie';
//     }

//     render () {
//         return (
//             <div>
//                 <h1>User Profile</h1>
//                 <p>Name: {this.state.name}</p>
//                 <button onClick={this.changeName}>Change Name</button>
//             </div>
//         );
//     }
// }

// Import
import { Component } from 'react';
import { string } from 'prop-types';

// Creating Class 'UserProfile'
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.initialName
        };
        this.changeName = this.changeName.bind(this)
    }

    // Corrected Function to Change 'Name' State
    changeName() {
        this.setState({ name: "Charlie" });
    }

    // Render Output
    render () {
        const name = this.state.name;
        return (
            <div>
                <h2>Part 1: Task 1</h2>
                <h3>User Profile</h3>
                <p>Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

// Validating Property 'initialName'
UserProfile.propTypes = {
    initialName: string
}

// Export Class
export default UserProfile