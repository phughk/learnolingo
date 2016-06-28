import { Component, OnInit } from '@angular/core'

import { OptionService } from './option.service'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<p id="hello">{{hello}}</p>`

})

export class OptionComponent implements OnInit{
  hello: string

  constructor(private optionService:OptionService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

}
