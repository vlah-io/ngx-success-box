@vlah.io/ngx-success-box

Set of reusable Angular components (factory workers) to help display success messages.

### Usage (code example)

```
  constructor(private successBoxWorker: SuccessBoxWorker) {
  }

  render(): void {
    this.successBoxWorker.render(message: string, options: DisplayOptionsInterface = {}): ComponentRef<SuccessBoxComponent>
  }
```

### CSS styles
```
  /* You can add global styles to this file, and also import other style files */
  @import "../../ngx-success-box/src/assets/css/ngx-success-box.css";
```

For more details read [here](https://github.com/vlah-io/ngx-success-box/blob/master/INSTALLATION.md).
