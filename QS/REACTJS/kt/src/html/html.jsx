import v1 from "../AV/tanjiro-kamado-in-forest.1920x1080.mp4"
import Rako from "./img/Raccoon-face.jpg"
function html(){
    return(
        <div>
            <h1>hello html</h1>
            <img src="https://th.bing.com/th/id/OIP.YQD7SQcCtCGg2c39FjzBmAHaGU?pid=ImgDet&rs=1" alt="" height={'300px'}width={'300px'}/>
        
             <img src={Rako} alt="" height={'300px'}width={'300px'}/>
             <br />
             <br />
             <a href="" target="_blank" rel="noreferrer">flipkart</a>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/3GfAgBmjSK0?si=tJWifUaFco-J8ZDd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.235864451088!2d73.78308580000001!3d18.650126450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d02f571f9f%3A0x5d6a5d16b2648b1f!2sKhandoba%20Mandir!5e0!3m2!1sen!2sin!4v1698307799295!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
<br /><br />
<video src={v1} autoPlay loop muted></video>
<br />
<br />
<h1>table</h1>
<table border={1}>
<thead>
   <tr>
    <td>home</td>
    <td>about</td>
    <td>other</td>
   </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td rowSpan={2}>2</td>
        <td>3</td>
    </tr>
    <tr>
        {/* <td>1</td> */}
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
</tbody>
<tfoot>
    <tr>
        <td colSpan={3}>hello footer</td>
    </tr>
</tfoot>
</table>
        </div>

    )
}
export default html