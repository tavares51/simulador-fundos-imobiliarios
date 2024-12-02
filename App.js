import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

function InputField({ placeholder = '', value = '', onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [unit, setUnit] = useState('Ano');
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 600;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Simulador de Fundos Imobiliários</Text>
        <Text style={styles.subtitle}>
          Preencha os valores e veja em quanto tempo você terá o rendimento desejado.
        </Text>
      </View>
      <View style={[styles.row, isSmallScreen && styles.block]}>
        <View style={styles.col}>
          <View style={styles.form}>
            <View style={styles.row}>
            <View style={styles.col}>
                <Text style={styles.p2}>Preço da Cota</Text>
                <InputField placeholder="10,07" value="10,07" onChange={(val) => handleInputChange('precoCota', val)} />
                <Text style={styles.p2}>Investimento mensal</Text>
                <InputField placeholder="200" value="200" onChange={(val) => handleInputChange('investimentoMensal', val)} />
                <Text style={styles.p2}>Qtde de Cotas inicial</Text>
                <InputField placeholder="0" value="0" onChange={(val) => handleInputChange('qtdeCotas', val)} />
              </View>
              <View style={styles.col}>
                <Text style={styles.p2}>Último Rendimento</Text>
                <InputField placeholder="0,10" value="0,10" onChange={(val) => handleInputChange('ultimoRendimento', val)} />
                <Text style={styles.p2}>Prazo</Text>
                <InputField placeholder="1" value="1" onChange={(val) => handleInputChange('prazo', val)} />
                <Text style={styles.p2}>Período</Text>
                <Picker
                  selectedValue={unit}
                  onValueChange={(itemValue) => setUnit(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Ano" value="Ano" />
                  <Picker.Item label="Mês" value="Mês" />
                </Picker>
              </View>
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox
                title="Reinvestir dividendos ganhos e o que sobrar do investimento mensal"
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
            </View>
            <View style={[styles.row, isSmallScreen && styles.block]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Calculado!')}
              >
                <Text style={styles.buttonText}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.result}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.p1}>Prazo</Text>
                <Text style={styles.p}>1 Ano</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.p1}>Preço</Text>
                <Text style={styles.p}>R$ 10,07</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.p1}>Último Rendimento</Text>
                <Text style={styles.p}>R$ 0,10</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.p1}>Total Investido</Text>
                <Text style={styles.p}>R$ 2.400,00</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.p1}>Total Reinvestido</Text>
                <Text style={styles.p}>R$ 160,00</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.p1}>Dividendos mensais final</Text>
                <Text style={styles.p}>R$ 25,10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: "#fffff",
    padding: 10,
    flex: 1,
    flexGrow: 1,

  },
  head: {
    padding: 20,
  },
  title: {
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
  },
  subtitle: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Arial",
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  block: {
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    margin: 1,
    padding: 5,
  },
  form: {
    borderRadius: 5,
  },
  result: {
    backgroundColor: "#6425ca",
    borderRadius: 10,
  },
  p: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
    padding: 5,
  },
  p2: {
    color: "gray",
    fontSize: 15,
    fontFamily: "Arial",
    padding: 5,
  },
  p1: {
    color: "white",
    fontSize: 15,
    fontFamily: "Arial",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#e5e6eb",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6425ca',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom:100
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0, // Remove espaçamento interno
    marginVertical: 5, // Reduz espaço entre elementos
    alignSelf: 'flex-start', // Alinha à esquerda (ou mude para center se preferir)
  },
  checkboxText: {
    fontSize: 14, // Reduz o tamanho da fonte
    color: 'gray',
    flexWrap: 'wrap', // Permite quebra de linha no texto
  },
  checkboxRow: {
    marginHorizontal: 10, // Espaçamento lateral
    width: '100%', // Ajusta para largura total do container
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#e5e6eb",
  },
});
