import React, { useContext } from "react";
import { Pane, Text, Button, Heading, Paragraph, TextInputField, FormField, Avatar, BackButton, CrossIcon, InfoSignIcon, EditIcon, WarningSignIcon, Dialog } from "evergreen-ui";
import { Link } from "react-router-dom";
import Component from "@reactions/component";
import background from "./Img/Stress.png";
import { SelectedSeatContext } from '../contexts/SelectSeatContext';
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import axios from 'axios';

function SeatInformationPage() {
  
  const [selected, setSelected] = useContext(SelectedSeatContext);

  function handleBook(){
    crudFirebase.update('Seats',(selected.seat).toString(),{status: 'Reserved'});
    axios({
      method: "POST", 
      url:"http://localhost:4000/api/sendEmail", 
      data: {
          name: "test",   
          subject: "test", 
          email: "taiwilson5@gmail.com", 
      }
    }).then((response)=>{
      console.log(response.data.msg)
  })

  }

  return (
    <div>
      {/* Back Button */}
      <Pane paddingBottom={20}>
        <Link to="/" style={{ textDecoration: "none" }}> {/* textDecoration has to set to none or else the button will have a line below the Login text */}
          <BackButton marginLeft={16} marginTop={16} intent="success" height={48} />
        </Link>
      </Pane>

      {/* Seat description including avatar*/}
      <Pane display="flex" padding={16} borderRadius={3} marginTop={20}> {/* Parent class, defiines the row*/}
        <Pane padding={16} alignItems="center" marginLeft={60} > {/* Children class, defiines the column*/}
          <Avatar isSolid name="S 1" size={300} />
        </Pane>
        <Pane flex={1} display="flex" marginLeft={30} padding={16}>
          <Pane padding={16}>
            <Pane flex={1} display="flex">
              <Pane>
                <InfoSignIcon color="info" marginRight={16} size={30} />
              </Pane>
              <Heading size={800} >{selected.seat}</Heading>
            </Pane>
            <Pane>
              <Heading size={800} >Description</Heading>
            </Pane>
            <Pane marginTop={16}>
              <Text size={600}>- Some description about the chair location(Powered/Aircon etc)<br></br> - This box should be dynamic depending on the id of the seat.
              </Text>
            </Pane>

            {/* Booking Button*/}
            <Pane display="flex" marginTop={100}>
              <Pane flex={1} alignItems="center" display="flex">
                <WarningSignIcon color="warning" size={30} marginRight={16} />
                <Heading size={600} color={"red"}>Please be at your seat by 15 mins<br></br>
                or your booking will be terminated</Heading>
              </Pane>
              <Link to="/BookingSuccessful" style={{ textDecoration: "none" }}>
                <Button appearance="primary" height={48} onClick={handleBook}>Book</Button>
              </Link>
            </Pane>

          </Pane>
        </Pane>
      </Pane>
    </div>
  );
}

export default SeatInformationPage;
