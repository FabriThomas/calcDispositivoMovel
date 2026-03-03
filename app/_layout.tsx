import { useFonts } from 'expo-font';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
        'Calculator': require('../assets/fonts/Calculator.ttf'),
    });

    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [operador, setOperador] = useState("");
    const [posicaoAtual, setPosicaoAtual] = useState(1);
    
    const { width, height } = useWindowDimensions();
    
    const minDimension = Math.min(width, height);
    const smallGridSize = minDimension * 0.6;

    if (!fontsLoaded) {
        return null;
    }

    function setNumber(position, digit) {
        if (position === 1) {
            setNumero1(numero1 + digit);
        } else if (position === 2) {
            setNumero2(numero2 + digit);
        }
    }

    function lidarComOperador(opClicado) {
        if (opClicado === '√') {
            if (numero1 !== "") {
                const resultadoRaiz = Math.sqrt(parseFloat(numero1));
                setNumero1(resultadoRaiz.toString());
            }
            return;
        }

        if (numero1 !== "") {
            setOperador(opClicado);
            setPosicaoAtual(2);
        }
    }

    function calcular() {
        if (numero1 !== "" && numero2 !== "" && operador !== "") {
            const n1 = parseFloat(numero1);
            const n2 = parseFloat(numero2);
            let resultado = 0;

            if (operador === '+') {
                resultado = n1 + n2;
            } else if (operador === '-') {
                resultado = n1 - n2;
            } else if (operador === 'x') {
                resultado = n1 * n2;
            } else if (operador === '/') {
                resultado = n1 / n2;
            }

            setNumero1(resultado.toString());
            setNumero2("");
            setOperador("");
            setPosicaoAtual(1);
        }
    }

    function resetar() {
        setNumero1("");
        setNumero2("");
        setOperador("");
        setPosicaoAtual(1);
    }

    return (
        <View style={[styles.container, { alignItems: 'center' }]}>
            <View style={[styles.grid, { width: smallGridSize }]}>
                <TouchableOpacity style={styles.displayFake}>
                    <Text style={styles.calcDisplay}>{numero1} {operador} {numero2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '1')}>
                    <Text style={styles.calcNumber}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '2')}>
                    <Text style={styles.calcNumber}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '3')}>
                    <Text style={styles.calcNumber}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => lidarComOperador('+')}>
                    <Text style={styles.calcNumber}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '4')}>
                    <Text style={styles.calcNumber}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '5')}>
                    <Text style={styles.calcNumber}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '6')}>
                    <Text style={styles.calcNumber}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => lidarComOperador('-')}>
                    <Text style={styles.calcNumber}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '7')}>
                    <Text style={styles.calcNumber}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '8')}>
                    <Text style={styles.calcNumber}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '9')}>
                    <Text style={styles.calcNumber}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => lidarComOperador('x')}>
                    <Text style={styles.calcNumber}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '0')}>
                    <Text style={styles.calcNumber}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => lidarComOperador('/')}>
                    <Text style={styles.calcNumber}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setNumber(posicaoAtual, '.')}>
                    <Text style={styles.calcNumber}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botaoIgual]} onPress={calcular}>
                    <Text style={styles.calcNumber}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
                    <Text style={styles.calcNumber}>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => lidarComOperador('√')}>
                    <Text style={styles.calcNumber}>√</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  grid: {
    backgroundColor: 'rgb(94, 94, 94)',
    flexDirection: 'row',
    flexWrap: 'wrap',    
    justifyContent: 'center',
    borderRadius:50,
    borderWidth:30,
    borderColor: 'rgb(94, 94, 94)',
    elevation:20,
    shadowColor:'rgb(71, 71, 71)',
    shadowOffset:{width:20,height:10}
  },
  botao: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: '#f5aa1fff',
    marginHorizontal: '2.5%',
    borderCurve:'circular',
    marginVertical: '2.5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:5,
    shadowColor:'rgb(214, 150, 30)',
    shadowOffset:{width:10,height:5}
  },
  botaoIgual: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: 'rgb(187, 121, 0)',
    marginHorizontal: '2.5%',
    borderCurve:'circular',
    marginVertical: '2.5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:5,
    shadowColor:'rgb(107, 70, 0)',
    shadowOffset:{width:10,height:5}
  },
  botaoReset:{
    width: '70%',
    aspectRatio: 3.5,
    backgroundColor: '#f51f1fff',
    marginHorizontal: '2.5%',
    marginVertical: '2.5%',
    borderRadius: 50,
    justifyContent: 'center',
    elevation:5,
    shadowColor:'rgb(211, 27, 27)',
    shadowOffset:{width:10,height:5}
  },
  displayFake:{
    width: '95%',
    aspectRatio: 4,
    backgroundColor: '#1ff57fff',
    marginHorizontal: '2.5%',
    marginVertical: '2.5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'rgb(23, 155, 82)',
    shadowOffset:{width:-10,height:-5}
  },
  calcNumber:{
    fontSize: 60, 
    alignSelf: 'center',
  },
  calcDisplay:{
    fontWeight:'bold',
    padding:0,
    fontSize:90,
    alignSelf:'flex-end',
    fontFamily: 'Calculator',
    letterSpacing: 10,
    textShadowOffset:{width:8,height:5},
    textShadowColor:'rgb(23, 155, 82)',
  }
});