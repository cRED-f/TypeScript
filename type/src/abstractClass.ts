abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
}
class Insta1 extends TakePhoto {
  constructor(public storyMode: string) {
    super("a", "b");
    this.storyMode = storyMode;
  }
}
