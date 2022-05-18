export default class ArrayBufferConverter {
  static toString(buffer) {
    const arrBuffer = new Uint16Array(buffer);
    const arr = Array.from(arrBuffer);
    const arrString = String.fromCharCode(...arr);
    return arrString;
  }

  load(buffer) {
    return this.toString(buffer);
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const arraybufferconverter = new ArrayBufferConverter();
arraybufferconverter.load(getBuffer());
