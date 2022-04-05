import * as React from 'react';
import{View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <ScrollView style={estilo.fotos}>
    <View style={estilo.container}>
      <Image style={estilo.logo} source={require("./assets/TWICE-Logo.png")}/>
      <Text style={estilo.titulo}> O Twice é um grupo de K-Pop, da JYP Entertainment, com 9 membros femininas, e (eu adoro elas não me julgue por favor), são elas:</Text>
      <Image style={estilo.img} source={require("./assets/chou-tzuyu.jpg")}/>
      <Text style={estilo.informacoes}> Chou Tzuyu - 22 Anos, Taiwanesa, mas foi viver na Coreia.</Text>
       <Image style={estilo.img} source={require("./assets/hirai-momo.jpg")}/>
       <Text style={estilo.informacoes}> Hirai Momo - 25 Anos, Japonesa, mas foi viver na Coreia.</Text>
        <Image style={estilo.img} source={require("./assets/im-nayeon.jpg")}/>
        <Text style={estilo.informacoes}> Im Nayeon - 26 Anos, Coreana </Text>
        <Image style={estilo.img} source={require("./assets/kim-dahyun.jpg")}/>
        <Text style={estilo.informacoes}> Kim Dahyun - 23 Anos, Coreana </Text>
        <Image style={estilo.img} source={require("./assets/minatozaki-sana.jpg")}/>
        <Text style={estilo.informacoes}> Minatozaki Sana - 25 Anos, Japonesa, mas foi viver na Coreia. </Text>
        <Image style={estilo.img} source={require("./assets/myoui-mina.jpg")}/>
        <Text style={estilo.informacoes}> Myoui Mina - 25 Anos, Japonesa, mas foi viver na Coreia, também. Assim finalizando as "não coreanas" do grupo </Text>
        <Image style={estilo.img} source={require("./assets/park-jihyo.jpg")}/>
        <Text style={estilo.informacoes}> Park Jihyo (Líder) - 25 Anos, Coreana </Text>
        <Image style={estilo.img} source={require("./assets/son-chaeyoung.jpg")}/>
        <Text style={estilo.informacoes}> Son Chaeyoung - 22 Anos, Coreana </Text>
        <Image style={estilo.img} source={require("./assets/yoo-jeongyeon.jpg")}/>
        <Text style={estilo.informacoes}> Yoo Jeongyeon - 25 Anos, Coreana </Text>
        </View>
        </ScrollView>
    
  );  
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#f9c596',

  },

  informacoes:{
    fontFamily:'Bahnschrift SemiBold',
    textAlign:'center',

  },
  titulo:{
    fontSize: 20,
    fontFamily:'Bahnschrift SemiBold',
    textAlign:'center',
  },

  img:{
    width: 350,
    height: 350,
    borderRadius: 50,
    borderColor: '#fc5d9d',
    borderWidth: 4,
    alignSelf: 'center',

  },
  logo:{
    width: 130,
    height: 150,
    alignSelf: 'center',
    marginTop: 45,
    marginBottom: 30

  }

});