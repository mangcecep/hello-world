import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

   constructor(props) {
       super(props)
       this.state = {
            name: 'Cecep'
       }

       console.log('LifecycleA constructor')
   }

   static getDerivedStateFromProps(prop, state) {
       console.log('lifecycleA getDerivedStateFromProps')
       return null
   }

   componentDidMount() {
       console.log('LifeCycleA componentDidMount')
   }

   shouldComponentUpdate(){
       console.log('lifecycle shouldComponentUpdate');
       return true
   }

   getSnapshotBeforeUpdate(prevProps, prevState){
       console.log('LifeCycleA getsnapshotBeforeUpdate');
       return null;
   }

   compinentDidUpdate() {
       console.log('LifecicleA componentDidUpdate');
   }

   changeState = () => {
       this.setState({
           name : 'Mangcep Ngulik Bareng'
       })
   }

    render() {
        console.log('LifcycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
