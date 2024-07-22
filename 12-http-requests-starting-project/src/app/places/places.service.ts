import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

import { Place } from './place.model';


@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places', 'Something went wrong with fetching available places.')
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places', 'There was an error when fetching your favorite places.')
      .pipe(
        tap({
          next: (userPlaces) => this.userPlaces.set(userPlaces)
        }));
  }

  addPlaceToUserPlaces(place: Place) {
    const previousPlaces = this.userPlaces();

    if (!previousPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...previousPlaces, place]);
    }

    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(previousPlaces);
        this.errorService.showError('Failed to store selected place.');
        return throwError(() => new Error())
      })
    );
  }

  removeUserPlace(place: Place) {
    const previousPlaces = this.userPlaces();

    if (previousPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set(previousPlaces.filter(p => p.id !== place.id));
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).pipe(
      catchError((error) => {
        this.userPlaces.set(previousPlaces);
        this.errorService.showError('Failed to remove selected place.');
        return throwError(() => new Error())
      })
    );

  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ places: Place[] }>(url, {
        // observe: 'response'
        // observe: 'events'
      })
      .pipe(
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
