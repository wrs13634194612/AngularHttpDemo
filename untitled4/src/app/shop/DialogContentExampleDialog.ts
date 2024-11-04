import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatFormField, MatInput],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog implements OnInit{
  cancelString :string=''
  sureString :string=''
  testString :string=''
  todos: Todo[] = [];
  /*
  * {

		"position": "772024102801",
		"name": "雨林",
		"icon": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
		"phone": "13952141236",
		"address": "成都市双流区华阳时代广场a栋701室"
	}
  * */
  dialogData: Todo = {position: '772024102801', name: '雨林', icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', phone: '13952141236', address: '成都市双流区华阳时代广场a栋701室'};
  protected readonly names = names;


  constructor(public dialogRef: MatDialogRef<AddMediaDialogData>, @Inject(MAT_DIALOG_DATA) public data: AddMediaDialogData) {}

  getClick(name: string) {
    console.log('you click this button')
    console.log(name)
    names = name
  }

  getLoginClick(ids: string) {
    console.log(this.dialogData.position)
    console.log(this.dialogData.name)
    console.log(this.dialogData.icon)
    console.log(this.dialogData.phone)
    console.log(this.dialogData.address)
    console.log(ids)



    this.dialogRef.close();

  }

  animal() {
    return names
  }


  ngOnInit(): void {
    this.cancelString="鲨鱼哟"
    this.sureString="昊昊超体"
    this.testString="测试超体"

  }

  onNoClick(): void {

    console.log(this.data.url)
    // this.data.url = '';
    this.dialogRef.close();
  }


}

export interface AddMediaDialogData {
  url: string;
  id: string;
}

var names = ''

interface Todo {
  position: string;
  name: string;
  icon: string;
  phone: string;
  address: string;
}


/*
{

		"position": "772024102801",
		"name": "雨林",
		"icon": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
		"phone": "13952141236",
		"address": "成都市双流区华阳时代广场a栋701室"
	}
	一共五个输入内容
	输入位置
	  输入名称
	   输入icon
	     输入phone
	       输入地址
* */
