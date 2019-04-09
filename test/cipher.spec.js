describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
      

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(window.cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");   
      it('debería retornar "345678901" para "123456789" con offset 2', () =>{
        assert.equal(window.cipher.decode(2,"123456789"), "345678901")
      });
      it('debería retornar "+*" para "$#" con offset 7', () =>{
        assert.equal(window.cipher.decode(7,"$#"),"+*")
        });
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode ,'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
    assert.equal(window.cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('debería retornar "abcdefg" para "klmnopq" con offset 10', () =>{
      assert.equal(window.cipher.decode(10,"klmnopq"),"abcdefg");
    });
    it('debería retornar "123456" para "234567" con offset 1', () =>{
      assert.equal(window.cipher.decode(1,"234567"), "123456")
    });
    it('debería retornar "+.$(!"%," para "#&+/(),$" con offset 8', () =>{
      assert.equal(window.cipher.decode(8,""), "")
      });
})
});