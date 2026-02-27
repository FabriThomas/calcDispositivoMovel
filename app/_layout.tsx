import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	const [contador, setContador] = useState(0);

	function adicionarMaisUm(){
		setContador(contador + 1)
	}

  function setFirst(){

  }

	return (
		<>


    <View style={styles.grid}>
      <TouchableOpacity style={styles.displayFake} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>Resultado: {contador}</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>1</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>2</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>3</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>+</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>4</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>5</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>6</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>-</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>7</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>8</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>9</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>x</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>0</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>/</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>.</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>=</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botaoReset} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>RESET</Text>
			</TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text style={{fontSize:150,alignSelf:'center'}}>√</Text>
			</TouchableOpacity>
    </View>
      


		</>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',     
    justifyContent: 'space-between',
  },
  botao: {
    width: '20%',
    height: '15%',
    aspectRatio: 1,
    backgroundColor: '#f5aa1fff',
    marginHorizontal: 10,
		padding: 20,
		borderRadius: 50,
    marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
  },
  botaoReset:{
    width: '30%',
    height: '10%',
    aspectRatio: 1,
    backgroundColor: '#f51f1fff',
    marginHorizontal: 10,
		padding: 20,
		borderRadius: 50,
    marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
  },
  displayFake:{
    width: '85%',
    height: '15%',
    aspectRatio: 1,
    backgroundColor: '#1ff57fff',
    marginHorizontal: 10,
		padding: 20,
		borderRadius: 50,
    marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
  }
});
