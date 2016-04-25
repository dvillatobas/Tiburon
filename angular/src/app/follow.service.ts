import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Follow{
  constructor(
    public id,
    public idSeguidor,
    public idSeguido
  ){}
}

export class UserList{
  constructor(
    public id,
    public following:boolean,
    public nick,
    public follow,
    public followers,
    public img
  ){}
}

@Injectable()
export class FollowService{

  private follows = [
    new Follow(1,2,1),
    new Follow(2,3,1),
    new Follow(3,1,2)
  ];
  private lastId : number = 3;

  setId(){
    this.lastId++;
    return this.lastId;
  }

  getListFollow(id:number){
    let list=[];
    for(let f of this.follows){
      if(f.idSeguidor===id){
        list.push(f.idSeguido);
      }
    }
    return withObserver(list);
  }

  getListFollowers(id:number){
    let list=[];
    for(let f of this.follows){
      if(f.idSeguido===id){
        list.push(f.idSeguidor);
      }
    }
    return withObserver(list);
  }
  isFollowing(id1,id2){
    for(let f of this.follows){
      if(id1 === f.idSeguidor && id2 === f.idSeguido){
        return true;
      }
    }
    return false;
  }
  addFollow(id1,id2){
    if(id1!=id2){
      this.follows.push(new Follow(this.setId(),id1,id2));
    }
  }
  deleteFollow(id1,id2){
    for(let f of this.follows){
      if(f.idSeguidor === id1 && f.idSeguido === id2){
        this.follows.splice(this.follows.indexOf(f),1);
      }
    }
  }




}
