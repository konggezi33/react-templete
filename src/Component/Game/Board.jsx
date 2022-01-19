import React,{ Fragment } from 'react'
import Square from './Square'
import './index.css'
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null), // 初始化数据
      xIsNext: true
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i) }/>
  }
  handleClick(i) {
    // 修改点击之后的数据
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      xIsNext: !this.state.xIsNext,
      squares:squares
    })
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return <Fragment>
      <h2>{ status }</h2>
      <div className="board-box">
        <div>
          <div className="board-row">
            { this.renderSquare(1) }
            { this.renderSquare(2) }
            { this.renderSquare(3) }
          </div>
          <div className="board-row">
            { this.renderSquare(4) }
            { this.renderSquare(5) }
            { this.renderSquare(6) }
          </div>
          <div className="board-row">
            { this.renderSquare(7) }
            { this.renderSquare(8) }
            { this.renderSquare(9) }
          </div>
        </div>
      </div>
      <br />
      <button onClick={() => {
        this.setState({
          squares: Array(9).fill(null), // 初始化数据
          xIsNext: true
        })
      }}>再来一局</button>
    </Fragment>
  }
}

export function calculateWinner(squares) {
  // 获胜者
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }
  return null
}