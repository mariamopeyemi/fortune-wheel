import { Rotate90DegreesCcw } from '@mui/icons-material';
import React,{useState} from 'react';
import styled from 'styled-components';

class Wheeler extends React.Component{

    state ={
        name: 'circle'
    }

    startRotation =()=>{
        console.log('====================================');
        this.setState({
            name: 'circle start-rotate'
        });
        setTimeout(() => {
            this.setState({
                name: 'circle start-rotate stop-rotate'
            })
        }, Math.floor(Math.random() * 10000) + 1);
    }
// const Wheeler = () => {
    // const [spin, setSpin] =useState();
    // function startRotation(){
    //     setSpin(rotate);
    //     setTimeout(() => {
    //         stopRotate
    //     }, Math.floor(Math.random() * 10000) + 1);
    // }
    render(){
  return (
    <Container >
        <div className='arrow'>&darr; </div>
        {/* <div className='arrow'>&darr; </div> */}
        < Card className='circle'>
            <li>
                <div className='text' >1</div>
            </li>
            <li>
                <div className='text' >2</div>
            </li>
            <li>
                <div className='text' >3</div>
            </li>
            <li>
                <div className='text' >4</div>
            </li>
            <li>
                <div className='text' >5</div>
            </li>
            <li>
                <div className='text' >6</div>
            </li>
            <li>
                <div className='text' >7</div>
            </li>
            <li>
                <div className='text' >8</div>
            </li>
            <li>
                <div className='text' >9</div>
            </li>
            <li>
                <div className='text' >10</div>
            </li>
            <li>
                <div className='text' >11</div>
            </li>
            <li>
                <div className='text' >12</div>
            </li>
        </ Card>
       <Button
        onClick={this.startRotation}
       >spin</Button>
    </Container>
  )
}}

export default Wheeler;

const Container = styled.div`
    margin: 5% 10%;
    padding: auto;
    text-align: center;
    background:yellow ;
    >.arrow{
        /* background: red; */
        width: 0px;
        height: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 50px solid black;
        text-align: center;
        margin: auto;
        /* font-size: 28px;
        height: 30px; */
        /* position: absolute;
        left: 50%;
        top: 100px; */
        z-index: 1;
    }
   

`
const Card = styled.ul`
    width: 35em;
    height: 35em;
    border: 1px solid black;
    position: relative;
    padding: 0px;
    margin: auto auto 5em auto;
    border-radius: 50%;
    list-style:none;
    overflow: hidden;
    li{
        overflow: hidden;
        position: absolute;
        top:0;
        right: 0;
        width: 50%;
        height: 50%;
        transform-origin: 0% 100% ;
    }
    .text{
        position: absolute;
        left: -100%;
        width: 200%;
        height: 200%;
        text-align: center;
        display: block;
        transform: skewY(60deg) rotate(15deg);
        padding-top: 20px;
        cursor: pointer;
        font-weight: bold;
        font-size: 18px;
    }
    li:first-child .text{
        background-color: red;
    }
    li:nth-child(2) .text{
        background-color: rgb(192, 250, 144);
    }
    li:nth-child(3) .text{
        background-color: blue;
    }
    li:nth-child(4) .text{
        background-color: purple;
    }
    li:nth-child(5) .text{
        background-color: brown;
    }
    li:nth-child(6) .text{
        background-color: violet;
    }
    li:nth-child(7) .text{
        background-color: beige;
    }
    li:nth-child(8) .text{
        background-color: rgb(229, 241, 98);
    }
    li:nth-child(9) .text{
        background-color: rgb(183, 232, 235);
    }
    li:nth-child(10) .text{
        background-color: rgb(189, 22, 103);
    }
    li:nth-child(11) .text{
        background-color: rgb(233, 168, 234);
    }
    li:nth-child(12) .text{
        background-color: orange;
    }
    li:first-child{
        transform:rotate(0deg) skewY(-60deg)
    }
    li:nth-child(2) {
        transform:rotate(30deg) skewY(-60deg);
    }
    li:nth-child(3) {
        /* background-color: blue; */
        transform:rotate(60deg) skewY(-60deg)
    }
    li:nth-child(4) {
        /* background-color: purple; */
        transform:rotate(90deg) skewY(-60deg)
    }
    li:nth-child(5) {
        /* background-color: brown; */
        transform:rotate(120deg) skewY(-60deg)
    }
    li:nth-child(6) {
        /* background-color: violet; */
        transform:rotate(150deg) skewY(-60deg)
    }
    li:nth-child(7) {
        /* background-color: beige; */
        transform:rotate(180deg) skewY(-60deg)
    }
    li:nth-child(8) {
        /* background-color: rgb(229, 241, 98); */
        transform:rotate(210deg) skewY(-60deg)
    }
    li:nth-child(9) {
        /* background-color: rgb(183, 232, 235); */
        transform:rotate(240deg) skewY(-60deg)
    }
    li:nth-child(10) {
        /* background-color: rgb(189, 22, 103); */
        transform:rotate(270deg) skewY(-60deg)
    }
    li:nth-child(11) {
        /* background-color: rgb(233, 168, 234); */
        transform:rotate(300deg) skewY(-60deg)
    }
    li:nth-child(12) {
        /* background-color: orange; */
        transform:rotate(330deg) skewY(-60deg)
    }
   
`

const Button= styled.button`
    color: red;
    padding: 20px 60px;
    background:blue ;
    cursor: pointer;
    border-radius: 8px;
    :hover{
        padding: 15px 55px;
    }
    .start-rotate{
        animation: start-rotate 1s linear infinite;
    }
    @keyframes start-rotate{
        100%: {
            transform: rotate(360deg)
        }
    }
    .stop-rotate{
        animation-play-state: paused;
    }
    @keyframes start-rotate{
        100%: {
            transform: rotate(360deg)
        }
    }
`
