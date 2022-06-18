import React from 'react';

const Device = () => {
  let midi = null;

  function onMIDISuccess(midiAccess) {
    midi = midiAccess;
    for (let entry of midi.inputs) {
      let input = entry[1];
      input.onmidimessage = (msg) => {
        console.log(msg);
        // console.log(msg.data[0], msg.data[1], msg.data[2], msg.timeStamp);,
      };
    }
  }

  function onMIDIFailure(msg) {
    console.log('Failed to get MIDI access - ' + msg);
  }

  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

  return <div>main</div>;
};

export { Device };
