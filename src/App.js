import React, {Component, createRef} from 'react';
import Grid from 'tui-grid';
// import 'tui-date-picker';
// import 'tui-time-picker';
import 'tui-grid/dist/tui-grid.css';
import 'tui-date-picker/dist/tui-date-picker.css';
// import './App.css';

class App extends Component {
  grid = createRef();
  gridInst = null;
  console.log("terst");

  componentDidMount() {
    console.log(this.grid);

    this.gridInst = new Grid({
      el: this.grid.current, 
      rowHeaders: ['checkbox'],
      header: {
        complexColumns: [
          {
            header: '검증항목',
            name: 'C1',
            childNames: ['c11', 'c12', 'c13']
          }
        ]
      },  
      columns: [
        {
          header: '관리항목 명*',
          name: 'c2',
          editor: 'text'
        },
        {
          header: '관리항목 내용*',
          name: 'c3',
          editor: 'text'
        },
        {
          header: '기본항목',
          name: 'c4',
          editor: {
            type: 'checkbox',
            options: {
              listItems: [
                { text: 'basicItem', value: 'Y' }
              ]
            }
          },
          align: 'center'
        },
        {
          header: '조합컬럼명*',
          name: 'c5',
          editor: 'text'
        }
      ],
      data: [{
        c2: 'CEO지원내용',
        c3: 'CEO지원내용(인터페이스용)',
        c4: '',
        c5: 'DEPT_CD'
      },  {
        c2: 'CEO지원내용',
        c3: 'CEO지원내용(인터페이스용)',
        c4: '',
        c5: 'DEPT_NM'
      },  {
        c2: 'CEO지원내용',
        c3: 'CEO지원내용(인터페이스용)',
        c4: '',
        c5: 'DEPT_CD'
      },  {
        c2: 'CEO지원내용',
        c3: 'CEO지원내용(인터페이스용)',
        c4: '',
        c5: 'DEPT_CD'
      },  {
        c2: 'CEO지원내용',
        c3: 'CEO지원내용(인터페이스용)',
        c4: '',
        c5: 'DEPT_CD'
      }],
      scrollY: true,
      scrollX: false
    });
  }

  render() {
    return (
      <div>
        <div ref={this.grid}/>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
