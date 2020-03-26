import React, { Component } from 'react'

class LifeCycleB extends Component {

   constructor(props) {
       super(props)
       this.state = {
            name: 'Cecep'
       }

       console.log('LifecycleB constructor')
   }

   static getDerivedStateFromProps(prop, state) {
       console.log('lifecycleB getDerivedStateFromProps')
       return null
   }
   
   componentDidMount() {
       console.log('LifeCycleB componentDidMount')
   }

   shouldComponentUpdate(){
    console.log('lifecycle shouldComponentUpdate');
    return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getsnapshotBeforeUpdate');
    }

    compinentDidUpdate() {
        console.log('LifecicleB componentDidUpdate');
    }

    render() {
        console.log('LifcycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
