import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyne, {mount, shallow, render, EnzymeAdapter} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyne.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Shining', 'it','somestrigg'],
    author: {
      name: 'charles dickes',
      imageUrl: 'images/authors/charlesdickens/charlesdickens.jpg',
      imageSource: 'DOMU',
      books: ['sc','avre','vaefv']
    },
  },
  highlight: 'none'
}

describe("Author Quiz",() => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={ ()=>{} } />, div);
  });

  describe("when no answer selected", () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />);
    });

    it("should have no background colour", ()=> {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
    });

  });


  describe('When the wrong answer has been selected', () => {
    let wrapper;

    beforeAll(()=> {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}} />
      );

      it('should have a red background color', () =>{
        expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
      });

    });

  });


  describe('When the first answer is selected', ()=>{
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(()=> {
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />
      );
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected should be called", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should recieve The Shining", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith('The Shining');
    });

  });



});