import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import MineField from './src/components/MineField';
import { cloneBoard, createMinedBoard, flagsUser, hadExplosion, invertFlag, openField, showMines, wonGame } from './src/functions';
import params from './src/params';
import LevelSelect from './src/screens/levelSelect';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelect: false,
    }
  }

  onOpenField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert("Perdeuuu!!", "Tente novamente!")
    }
    if(won) {
      Alert.alert("Parabéns", "Você ganhou!")
    }

    this.setState({ board, lost, won})
  }

  onSelectField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert("Parabéns", "Você venceu!")
    }

    this.setState({ board, won })
  }
  
  onLevelSelected = level =>{
    params.difficultLevel = level
    this.setState(this.createState())
  }
  render(){
    return(
      <View style={styles.container}>
        <LevelSelect isVisible={this.state.showLevelSelect}
          onLevelSelected={this.onLevelSelected}
          onCancel={()=> this.setState({ showLevelSelect: false })}/>
        <Header flagsLeft={this.minesAmount() - flagsUser(this.state.board)} 
          onNewGame={()=> this.setState(this.createState())}
          onFlagPress={()=> this.setState({showLevelSelect: true})}>
        </Header>
        <View style={styles.board}>
          <MineField onSelectField={this.onSelectField} onOpenField={this.onOpenField} board={this.state.board}></MineField>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems: 'center',
    backgroundColor:"#AAA"
  }
})