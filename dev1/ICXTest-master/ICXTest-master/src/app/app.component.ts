import { Component, OnInit ,TemplateRef } from '@angular/core';
import { MovieServiceService } from './movie-service.service';
import { Movie } from './movie';
import { clone } from 'lodash';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Movies: Movie[];
  movie: any = {};

  sort = '-duration';
  titleSearch = '';
  searchRes: boolean=false;
  closeResult: string;

   
  listCategory = [
  				  {name : 'Action'},
  				  {name : 'Adventure'},
  				  {name : 'Animation'},
  				  {name : 'Comedy'},
  				  {name : 'Crime'},
  				  {name : 'Documentary'},
  				  {name : 'Drama'},
  				  {name : 'Family'},
  				  {name : 'Horror'},
  				 ];
  selectedCategory = '';
  constructor(private _movieService: MovieServiceService,private modalService: BsModalService) {
  }
  public modalRef: BsModalRef;



// Other variables    
  IsForUpdate: boolean = false;   
  newItem; 
  updatedItem;


  ngOnInit() {

    this.getMovies();
  }

  getMovies() {

  		this.Movies = this._movieService.getMoviesFromData();

  }

  sortBy(sorting_var){
  	this.sort = sorting_var;
  	console.log(this.sort);
  }

  sortCategoryBy(cat){
  	this.selectedCategory = cat;

  }


 public openModal(template: TemplateRef<any>) {

 this.movie = {};
this.movie.category=this.listCategory[1];

 this.modalRef = this.modalService.show(template);

  }

   public openModal2(template: TemplateRef<any>,movie1:Movie) {

 this.movie = movie1;
this.movie.category=this.listCategory[1];

 this.modalRef = this.modalService.show(template);



  }
  

onSubmit(movief:Movie){

	this.Movies.push(movief);
     this.Movies=this.Movies.slice();
    console.log(this.Movies);
    this.modalRef.hide();
}



  deleteMovie(i) {
        console.log(i);
    this.Movies.splice(i, 1);  
    console.log(this.Movies.length+"/lenght");
    this.Movies=this.Movies.slice();
  }
 





  
// When user clicks on update button to submit updated value  
UpdateMovie(UpdatedMovie:Movie) {  


  let data =UpdatedMovie.id;

  for (let i = 0; i < this.Movies.length; i++) {  
    if (i == data) {  
      this.Movies[i] = this.updatedItem;  
    }  
  }  

    this.modalRef.hide();
  
}  






}
