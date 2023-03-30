import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View, TextInput, Alert, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { ToastAndroid } from 'react-native';


export const PriceModal1 = ({ visible, onClose }) => {
  // Price input within the Circle K modal. 
  const [modalVisible2, setModalVisible2] = useState(false);
  const [petrolPrice, setPetrolPrice] = useState();
  const [dieselPrice, setDieselPrice] = useState();
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices')
      .then(response => {
        setPrices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    axios.post('http://192.168.8.106:4000/prices', { petrolPrice, dieselPrice })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices([...prices, response.data]);
        setPetrolPrice('');
        setDieselPrice('');
      })
      .catch(error => console.error(error));
  };



  return (
    <View>

      {/* Modal sheet for Modal 1 */}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Circle K</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices[prices.length - 1].petrolPrice} <Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices[prices.length - 1].dieselPrice} <Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible2(true);
                onClose(false);

              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal*/}
      <Modal
        visible={modalVisible2}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice}
              onChangeText={text => setPetrolPrice(text)}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice}
              onChangeText={text => setDieselPrice(text)}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible2(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible2(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal sheet for Modal finished*/}
      {/* Modal sheet for Modal finished*/}
    </View>
  );
};

export const PriceModal2 = ({ visible, onClose }) => {
  // Price input within the  modal 2.
  const [modalVisible3, setModalVisible3] = useState(false);
  const [petrolPrice3, setPetrolPrice3] = useState();
  const [dieselPrice3, setDieselPrice3] = useState();
  const [prices3, setPrices3] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices3')
      .then(response => {
        setPrices3(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit3 = () => {
    axios.post('http://192.168.8.106:4000/prices3', { petrolPrice3, dieselPrice3 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices3([...prices3, response.data]);
        setPetrolPrice3('');
        setDieselPrice3('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal 2 */}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Topaz</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>


          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices3.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices3[prices3.length - 1].petrolPrice3} <Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices3[prices3.length - 1].dieselPrice3} <Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible3(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal 2 */}
      <Modal
        visible={modalVisible3}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice3}
              onChangeText={setPetrolPrice3}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice3}
              onChangeText={setDieselPrice3}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible3(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit3();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible3(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for ModalA finished */}
      {/* Modal for ModalA finished */}
    </View>

  );
};

export const PriceModal3 = ({ visible, onClose }) => {
  // Price input within the  modal 3.
  const [modalVisible4, setModalVisible4] = useState(false);
  const [petrolPrice4, setPetrolPrice4] = useState();
  const [dieselPrice4, setDieselPrice4] = useState();
  const [prices4, setPrices4] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices4')
      .then(response => {
        setPrices4(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit4 = () => {
    axios.post('http://192.168.8.106:4000/prices4', { petrolPrice4, dieselPrice4 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices4([...prices4, response.data]);
        setPetrolPrice4('');
        setDieselPrice4('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal 3*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Applegreen</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices4.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices4[prices4.length - 1].petrolPrice4}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices4[prices4.length - 1].dieselPrice4}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>
          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible4(true);
                onClose(false);

              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal B */}
      <Modal
        visible={modalVisible4}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice4}
              onChangeText={setPetrolPrice4}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice4}
              onChangeText={setDieselPrice4}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible4(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit4();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible4(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for ModalB finished */}
      {/* Modal for ModalB finished */}

    </View>
  );
};

export const PriceModal4 = ({ visible, onClose }) => {
  //   // Price input within the  modal C.
  const [modalVisible5, setModalVisible5] = useState(false);
  const [petrolPrice5, setPetrolPrice5] = useState();
  const [dieselPrice5, setDieselPrice5] = useState();
  const [prices5, setPrices5] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices5')
      .then(response => {
        setPrices5(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit5 = () => {
    axios.post('http://192.168.8.106:4000/prices5', { petrolPrice5, dieselPrice5 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices5([...prices5, response.data]);
        setPetrolPrice5('');
        setDieselPrice5('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal 4*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Top Oil</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices5.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices5[prices5.length - 1].petrolPrice5}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices5[prices5.length - 1].dieselPrice5}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible5(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal 4 */}
      <Modal
        visible={modalVisible5}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice5}
              onChangeText={setPetrolPrice5}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice5}
              onChangeText={setDieselPrice5}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible5(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit5();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible5(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for ModalC finished */}
      {/* Modal for ModalC finished */}
    </View>
  );
};

export const PriceModal5 = ({ visible, onClose }) => {
  //   // Price input within the  modal Texaco.
  const [modalVisible6, setModalVisible6] = useState(false);
  const [petrolPrice6, setPetrolPrice6] = useState();
  const [dieselPrice6, setDieselPrice6] = useState();
  const [prices6, setPrices6] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices6')
      .then(response => {
        setPrices6(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit6 = () => {
    axios.post('http://192.168.8.106:4000/prices6', { petrolPrice6, dieselPrice6 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices6([...prices6, response.data]);
        setPetrolPrice6('');
        setDieselPrice6('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Texaco*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Texaco</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices6.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices6[prices6.length - 1].petrolPrice6}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices6[prices6.length - 1].dieselPrice6}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible6(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Texaco */}
      <Modal
        visible={modalVisible6}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice6}
              onChangeText={setPetrolPrice6}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice6}
              onChangeText={setDieselPrice6}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible6(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit6();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible6(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Texaco finished */}
      {/* Modal for Modal Texaco finished */}
    </View>
  );
};

export const PriceModal6 = ({ visible, onClose }) => {
  //   // Price input within the  modal Maxol.
  const [modalVisible7, setModalVisible7] = useState(false);
  const [petrolPrice7, setPetrolPrice7] = useState();
  const [dieselPrice7, setDieselPrice7] = useState();
  const [prices7, setPrices7] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices7')
      .then(response => {
        setPrices7(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit7 = () => {
    axios.post('http://192.168.8.106:4000/prices7', { petrolPrice7, dieselPrice7 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices7([...prices7, response.data]);
        setPetrolPrice7('');
        setDieselPrice7('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Maxol*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Maxol</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices7.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices7[prices7.length - 1].petrolPrice7}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices7[prices7.length - 1].dieselPrice7}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible7(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Maxol */}
      <Modal
        visible={modalVisible7}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice7}
              onChangeText={setPetrolPrice7}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice7}
              onChangeText={setDieselPrice7}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible7(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit7();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible7(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Maxol finished */}
      {/* Modal for Modal Maxol finished */}
    </View>
  );
};

export const PriceModal7 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible8, setModalVisible8] = useState(false);
  const [petrolPrice8, setPetrolPrice8] = useState();
  const [dieselPrice8, setDieselPrice8] = useState();
  const [prices8, setPrices8] = useState([]);


  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices8')
      .then(response => {
        setPrices8(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit8 = () => {
    axios.post('http://192.168.8.106:4000/prices8', { petrolPrice8, dieselPrice8 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices8([...prices8, response.data]);
        setPetrolPrice8('');
        setDieselPrice8('');
      })
      .catch(error => console.error(error));
  };



  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal  
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Inver</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {prices8.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices8[prices8.length - 1].petrolPrice8} <Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices8[prices8.length - 1].dieselPrice8} <Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>
          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible8(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible8}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='000.00'
              keyboardType={'numeric'}
              value={petrolPrice8}
              maxLength={6} // Set maxLength to 6 (3 integers + decimal point + 2 decimals)
              onChangeText={setPetrolPrice8}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='000.00'
              keyboardType={'numeric'}
              value={dieselPrice8}
              onChangeText={setDieselPrice8}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible8(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit8();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible8(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal8 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible9, setModalVisible9] = useState(false);
  const [petrolPrice9, setPetrolPrice9] = useState();
  const [dieselPrice9, setDieselPrice9] = useState();
  const [prices9, setPrices9] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices9')
      .then(response => {
        setPrices9(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit9 = () => {
    axios.post('http://192.168.8.106:4000/prices9', { petrolPrice9, dieselPrice9 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices9([...prices9, response.data]);
        setPetrolPrice9('');
        setDieselPrice9('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Circle K</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices9.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices9[prices9.length - 1].petrolPrice9}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices9[prices9.length - 1].dieselPrice9}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>


          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible9(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible9}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice9}
              onChangeText={setPetrolPrice9}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice9}
              onChangeText={setDieselPrice9}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible9(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit9();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible9(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal9 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible10, setModalVisible10] = useState(false);
  const [petrolPrice10, setPetrolPrice10] = useState();
  const [dieselPrice10, setDieselPrice10] = useState();
  const [prices10, setPrices10] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices10')
      .then(response => {
        setPrices10(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit10 = () => {
    axios.post('http://192.168.8.106:4000/prices10', { petrolPrice10, dieselPrice10 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices10([...prices10, response.data]);
        setPetrolPrice10('');
        setDieselPrice10('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Circle K</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices10.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices10[prices10.length - 1].petrolPrice10}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices10[prices10.length - 1].dieselPrice10}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>
          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible10(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible10}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice10}
              onChangeText={setPetrolPrice10}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice10}
              onChangeText={setDieselPrice10}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible10(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit10();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible10(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal10 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible11, setModalVisible11] = useState(false);
  const [petrolPrice11, setPetrolPrice11] = useState();
  const [dieselPrice11, setDieselPrice11] = useState();
  const [prices11, setPrices11] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices11')
      .then(response => {
        setPrices11(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit11 = () => {
    axios.post('http://192.168.8.106:4000/prices11', { petrolPrice11, dieselPrice11 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices11([...prices11, response.data]);
        setPetrolPrice11('');
        setDieselPrice11('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Circle K</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices11.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices11[prices11.length - 1].petrolPrice11}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices11[prices11.length - 1].dieselPrice11}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>


          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible11(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible11}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice11}
              onChangeText={setPetrolPrice11}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice11}
              onChangeText={setDieselPrice11}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible11(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit11();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible11(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal11 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible12, setModalVisible12] = useState(false);
  const [petrolPrice12, setPetrolPrice12] = useState();
  const [dieselPrice12, setDieselPrice12] = useState();
  const [prices12, setPrices12] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices12')
      .then(response => {
        setPrices12(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit12 = () => {
    axios.post('http://192.168.8.106:4000/prices12', { petrolPrice12, dieselPrice12 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices12([...prices12, response.data]);
        setPetrolPrice12('');
        setDieselPrice12('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Circle K</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>


          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices12.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices12[prices12.length - 1].petrolPrice12}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices12[prices12.length - 1].dieselPrice12}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible12(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible12}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice12}
              onChangeText={setPetrolPrice12}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice12}
              onChangeText={setDieselPrice12}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible12(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit12();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible12(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal12 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible13, setModalVisible13] = useState(false);
  const [petrolPrice13, setPetrolPrice13] = useState();
  const [dieselPrice13, setDieselPrice13] = useState();
  const [prices13, setPrices13] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices13')
      .then(response => {
        setPrices13(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit13 = () => {
    axios.post('http://192.168.8.106:4000/prices13', { petrolPrice13, dieselPrice13 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices13([...prices13, response.data]);
        setPetrolPrice13('');
        setDieselPrice13('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Texaco</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices13.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices13[prices13.length - 1].petrolPrice13}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices13[prices13.length - 1].dieselPrice13}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible13(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible13}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice13}
              onChangeText={setPetrolPrice13}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice13}
              onChangeText={setDieselPrice13}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible13(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit13();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible13(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal13 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible14, setModalVisible14] = useState(false);
  const [petrolPrice14, setPetrolPrice14] = useState();
  const [dieselPrice14, setDieselPrice14] = useState();
  const [prices14, setPrices14] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices14')
      .then(response => {
        setPrices14(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit14 = () => {
    axios.post('http://192.168.8.106:4000/prices14', { petrolPrice14, dieselPrice14 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices14([...prices14, response.data]);
        setPetrolPrice14('');
        setDieselPrice14('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Top oil</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices14.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices14[prices14.length - 1].petrolPrice14}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices14[prices14.length - 1].dieselPrice14}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible14(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible14}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice14}
              onChangeText={setPetrolPrice14}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice14}
              onChangeText={setDieselPrice14}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible14(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit14();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible14(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal14 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible15, setModalVisible15] = useState(false);
  const [petrolPrice15, setPetrolPrice15] = useState();
  const [dieselPrice15, setDieselPrice15] = useState();
  const [prices15, setPrices15] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices15')
      .then(response => {
        setPrices15(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit15 = () => {
    axios.post('http://192.168.8.106:4000/prices15', { petrolPrice15, dieselPrice15 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices15([...prices15, response.data]);
        setPetrolPrice15('');
        setDieselPrice15('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Texaco</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>


          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices15.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices15[prices15.length - 1].petrolPrice15}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices15[prices15.length - 1].dieselPrice15}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible15(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible15}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice15}
              onChangeText={setPetrolPrice15}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice15}
              onChangeText={setDieselPrice15}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible15(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit15();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible15(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal15 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible16, setModalVisible16] = useState(false);
  const [petrolPrice16, setPetrolPrice16] = useState();
  const [dieselPrice16, setDieselPrice16] = useState();
  const [prices16, setPrices16] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices16')
      .then(response => {
        setPrices16(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit16 = () => {
    axios.post('http://192.168.8.106:4000/prices16', { petrolPrice16, dieselPrice16 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices16([...prices16, response.data]);
        setPetrolPrice16('');
        setDieselPrice16('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Texaco</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices16.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices16[prices16.length - 1].petrolPrice16}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices16[prices16.length - 1].dieselPrice16}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible16(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible16}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice16}
              onChangeText={setPetrolPrice16}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice16}
              onChangeText={setDieselPrice16}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible16(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit16();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible16(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};

export const PriceModal16 = ({ visible, onClose }) => {
  //   // Price input within the  modal Inver.
  const [modalVisible17, setModalVisible17] = useState(false);
  const [petrolPrice17, setPetrolPrice17] = useState();
  const [dieselPrice17, setDieselPrice17] = useState();
  const [prices17, setPrices17] = useState([]);

  useEffect(() => {
    // Fetch the current petrol and diesel prices from the server when the component mounts
    axios.get('http://192.168.8.106:4000/prices17')
      .then(response => {
        setPrices17(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit17 = () => {
    axios.post('http://192.168.8.106:4000/prices17', { petrolPrice17, dieselPrice17 })
      .then(response => {
        console.log(response.data);
        // update the serverData state variable with the new data
        setPrices17([...prices17, response.data]);
        setPetrolPrice17('');
        setDieselPrice17('');
      })
      .catch(error => console.error(error));
  };
  return (
    <View>
      {/* Modal for Modal Inver*/}
      <Modal
        transparent={true}
        onBackdropPress={() => onClose(false)}
        onBackButtonPress={() => onClose(false)}
        visible={visible}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Maxol</Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Current petrol price: </Text>
            <Text style={styles.text}>Current Diesel price: </Text>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text style={styles.amount}> € {petrolPrice} </Text> */}
            {prices17.length > 0 && (
              <View>
                <Text style={styles.amount}>{prices17[prices17.length - 1].petrolPrice17}<Text style={styles.unit}> cent per Litre</Text></Text>
                <Text style={styles.amount}>{prices17[prices17.length - 1].dieselPrice17}<Text style={styles.unit}> cent per Litre</Text></Text>
              </View>
            )}
          </View>

          <View style={styles.button}>
            <Button
              title="Update Price"
              onPress={() => {
                setModalVisible17(true);
                onClose(false);
              }} />
          </View>
        </View>
      </Modal>

      {/* Modal within the modal used to update the price for Modal Inver */}
      <Modal
        visible={modalVisible17}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter new Petrol price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={petrolPrice17}
              onChangeText={setPetrolPrice17}
            />
            <Text style={styles.modalText}>Enter new Diesel price: </Text>
            <TextInput style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='0.00'
              keyboardType={'numeric'}
              value={dieselPrice17}
              onChangeText={setDieselPrice17}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => {
                  setModalVisible17(false);
                  ToastAndroid.show('Price updated successfully!!!', ToastAndroid.SHORT);
                  handleSubmit17();
                }} />
              </View>
              <View style={styles.buttonContainer} >
                <Button title="Cancel" style={styles.redButton} underlayColor='#fff' onPress={() => {
                  setModalVisible17(false);
                }} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal for Modal Inver finished */}
      {/* Modal for Modal Inver finished */}
    </View>
  );
};


const styles = StyleSheet.create({
  //CSS - Main Modal sheet
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    minHeight: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  leftColumn: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 5,
  },
  unit: {
    fontSize: 14,
    color: 'red',
  },
  button: {
    position: 'absolute',
    bottom: 35,
    left: '50%',
    marginLeft: -55,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },

  // CSS - Modal within the main modal
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 15,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
})
