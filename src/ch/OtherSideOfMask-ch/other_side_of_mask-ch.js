
import React, { Component } from 'react';
import './other_side_of_mask_ch.css';
import {OBJModel, GLTFModel} from 'react-3d-viewer'
import {ModelViewer} from 'react-3d-model-viewer';
import image1 from '../../assets/image1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button} from 'react-bootstrap';

class OtherSideOfMask_ch extends Component {
    render() {
        let audio = new Audio("/coughing.mp3")
        const start = () => {
          console.log("clicked")
          audio.play()
        }

        return (
          <div>
            <Container fluid>
            <Row>
              <Col lg={12} style={{display:"flex", width:"100%", textAlign:"center",
                overFlow:"hidden", alignItems:"center", justifyContent:"center", borderBottom: "1px solid"}}>
              <div>
                <OBJModel src="./Bee.obj" textPath="" width="500" height="500"
                   position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
               </div>
              </Col>
            </Row>
            <Row style={{marginBottom:"5%", marginTop: "2%"}}>
              <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
                <Row>
                  <h2 style={{color: "#0C3866"}}>Behind the Masks</h2>
                </Row>
                <Row>
                  <h1 style={{color:"#BE0027"}}>THE OTHER SIDE OF MASK</h1>
                </Row>
                <Row>
                  <p style={{fontSize:"25px", marginRight:"30%"}}>Artist: xxx</p>
                  <Col xl={{span:3, offset:4}}lg={{span:4, offset:2}} md={{span:4, offset:2}} sm={{span:4, offset:2}} xs={{span:4, offset:4}}>
                    <Button style={{display:"inline", backgroundColor: "#BE0027", paddingLeft:"30%", paddingRight:"30%", borderRadius:"25px"}}>SHARE IT</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{borderBottom: "1px solid"}}></Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"5%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolor.</p>
              </Col>
            </Row>
            <Row>
            <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} >
              <img src={image1} style={{display:'block',
                maxWidth: "100%", height: "auto", width:"100%"}} class="img-responsive"></img>
            </Col>
            </Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"2%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolorh </p>
              </Col>
            </Row>
            <Row>
            <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}}>
              <img src={image1} style={{display:'block',
                maxWidth: "100%", height: "auto", width:"100%"}} class="img-responsive"></img>
            </Col>
            </Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"2%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolor. </p>
              </Col>
            </Row>
          </Container>
        </div>
        );
    }
}

export default OtherSideOfMask_ch;
