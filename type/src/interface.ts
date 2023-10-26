interface TakePhoto {
  cameraMode: string;
  filter: string;
}
interface Story {
  storyMode: string;
}

class Insta implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public storyMode: string
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
}

class Youtube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public videoMode: string
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
}
