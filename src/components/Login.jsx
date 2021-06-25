import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            userList: []
        }
    }
    getUser = async () => {
        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/users.`)
            const users = await result.json()
            users.map(user =>
                this.setState({
                    userList: [...this.state.userList, { username: user.username }]


                })
            )
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div>
                <h1 style={{
                    color: 'blue',

                }}>
                    Login
                </h1>
                <form className="form-group container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <label>Username</label>
                            <input type="text" class="form-control" id="example" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="col-8">
                            <label>Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="col-8">
                            <button className="btn btn-primary">
                                Valide
                            </button>
                        </div>
                    </div>


                </form>


            </div>
        )
    }
}

export default Login