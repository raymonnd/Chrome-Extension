


if (typeof init === 'undefined'){
  const topLocation = 50;
  const rightLocation = 10;

  const init = function () {

    

    // const injectElement = document.createElement('div');
    // injectElement.className = 'rustyZone-element';
    // injectElement.innerHTML = "Thanks for Studying!";
    // document.body.appendChild(injectElement);
  
    const hostEle = document.createElement('div');
    hostEle.className = 'rustyZone-element-host';
    hostEle.innerHTML = '<style>.div{height:100%;position:fixed;right:200px;top:670px;border:3px solid blue;margin:10px;padding:10px;width:200px;}</style>' + 'Hello darkness parentDiv';
    document.body.appendChild(hostEle);

    // using shadow root
    var host = document.querySelector('.rustyZone-element-host');
    var root = host.attachShadow({mode: 'open'});
    var div = document.createElement('div');
    div.className = 'div root-class';
    div.innerHTML = `<style>.div{z-index:2;position:fixed;right:200px;top:670px;
      margin:10px;padding:10px;width:200px;height:100%;}</style>`;

    // div.innerHTML = `
    // <script>
    //     function addCode() {
    //         document.getElementById("add_to_me").innerHTML += 
    //           "<h3>This is the text which has been inserted by JS</h3>";
    //     }
    // </script>`;
      
    // div.innerHTML = '<style>.div{z-index:2;position:absolute;right:50px;top:100px;border:3px solid blue;margin:10px;padding:10px;width:200px;}</style>';
    root.appendChild(div);
    var insert = document.createElement('insert');
    insert.className = 'insert root-class';
    insert.innerHTML = '<a id="mybutton" href="" download="output.txt" style="padding: 5px; border:1px solid black; font-family: serif;text-decoration:none; color: black; background-color:#F3E779";>Save</a><textarea id="mytextarea" type="text" style="background-color:#F3E779; color:black">Type Here</textarea>';
    // insert.innerHTML = '<insert type="text">Type Here</insert>'
    // insert.innerHTML =`<textarea id="text-val" rows="4">This is the content of my file</textarea><br/>`;
    
    
    div.appendChild(insert);


    // button
    // var button = document.createElement('button');
    // button.className = 'button root-class';
    // // button.innerHTML = '<button id="buttonDownload">Download</button>';
    // // insert.innerHTML = '<insert type="text">Type Here</insert>';

    // button.innerHTML = `<input type="button" id="dwn-btn" value="Download dinamically generated text file"/>`
    // div.appendChild(button);

    // var div = document.createElement('div2');
    // div2.className = 'div root-class';
    // div2.innerHTML = ` <button onclick="addCode()">Save Notes</button>`;
    // insert.appendChild(div2);
    
// here is event listener for keydown
  //   document.addEventListener('keydown', logKey);
  // // document.addEventListener('mousemove', logKey);

  // function logKey(e) {
  //   if (e.key === "Enter") {
  //     console.log(e);
  //   }
  //   topLocation= `${e.screenY}`;
  //   console.log(topLocation);
  //   // ,
  //   leftLocation = `${e.screenX}`;
  //   console.log(leftLocation);
  //     // Client X/Y: ${e.clientX}, ${e.clientY}`;
  // }

  // here is for the text download area
  $('#changeColor').click(function(){
    var data = $('#mytextarea').val();
    alert(data);
    this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(data);
})
  }
init();
}


// function elemTarget(e) {
// 	e = e || window.event;
// 	e.preventDefault();
// 	return e.target;
// }

// document.addEventListener("click", function(e) {
//   let elem = elemTarget(e);
    
//   if (elem.id == 'buttonDownload') {
//     saveText();
//   }
// });


// function saveText() {
// 	let data = document.querySelector('#texTareaI').value;
// 	let file = 'data-' + Date.now() + '.txt';

// 	let link = document.createElement('a');
// 	link.download = file;
// 	let blob = new Blob(['' + data + ''], {
// 		type: 'text/plain'
// 	});
// 	link.href = URL.createObjectURL(blob);
// 	link.click();
// 	URL.revokeObjectURL(link.href);
// }