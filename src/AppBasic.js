import React from 'react'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();

    var list = document.getElementById("list");
    var element = document.createElement('li');

    element.innerText = "Tariq Mahmood";




    list.childNodes.forEach(element => {
      console.log("element: ", element.innerText);
      // if (element.innerText === 'First')
      //   list.removeChild(element);
    })


    var isFirstElement = list.firstElementChild;
    console.log(isFirstElement);

    var isExistElement = list.getElementsByClassName('second');
    console.log("is Exists :", isExistElement);


  }

  return (
    <div className="app">
      <form on onSubmit={handleSubmit}>
        <button type="submit" id="submit" name="submit"> Submit</button>
      </form>
      <ul id="list">
        <li className='first'>First</li>
        <li className="second">Second</li>
        <li className="second">Second</li>
        <li className="second">Second</li>
      </ul>

    </div>
  )
}

export default App;
