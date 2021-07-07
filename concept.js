/**
 * // document.querySelector('#current--' + activePlayer).textContent = dice;
 * 
 * // to manupilate the element
    document.querySelector('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    // act as getter basicaly it return the value of selected selector 
    var x = document.querySelector('#score-0').textContent;
    console.log(x);

    // querySelector is also used to change the css property value
    document.querySelector('.dice').style.display = 'none';

 */

 ////////////////////////////////
 /**    
  * /////////////////    Anonymus Function
  * document.querySelector('.btn btn--roll').addEventListener('click', function () {
  * 
  * });
  * 
  * ///////////////// callback function
  * we want the event listener to call the function for us and this btn function is 
    called the callback function 
    And that's the function that is not called by us but by another function
    The function that we pass into another function as an argument  and that function will that function for us

  * function btn(){
  * };
  * 
  * document.querySelector('.btn btn--roll').addEventListener('click', btn); 
  */


  ////////////////////////////////
  /**
   * playing with css
   * document.querySelector('.player--0').classList.remove('active');
   * document.querySelector('.player--1').classList.add('active');
   */
