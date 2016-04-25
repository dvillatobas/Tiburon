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

@Injectable()
export class FollowService{
  constructor(){}
  private follows = [
    new Follow(1,2,1),
    new Follow(1,3,1),
    new Follow(1,1,2)
  ];

  getListFollow(id:number){
    let list=[];
    for(let f of this.follows){
      if(f.idSeguidor===id){
        list.push(f.idSeguido);
      }
    }
    return list;
  }

  getListFollowers(id:number){
    let list=[];
    for(let f of this.follows){
      if(f.idSeguido===id){
        list.push(f.idSeguidor);
      }
    }
    return list;
  }
  isFollowing(id1,id2){
    for(let f of this.follows){
      if(id1 === f.idSeguidor && id2 === f.idSeguido){
        return true;
      }
    }
    return false;
  }


}
