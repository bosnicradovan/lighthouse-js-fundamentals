const chooseStations = function (stations) {
  // ['Big Bear Donair', 10, 'restaurant'],
  // ['Bright Lights Elementary', 50, 'school'],
  // ['Moose Mountain Community Centre', 45, 'community centre']

  let goodStations = [];
  for (let station of stations) {
    const  capacity = station[1]
    const type = station[2]
    if (capacity >= 20) {
      if (type === "community centre" || type === "school") {
        goodStations.push(station[0])
<<<<<<< HEAD
     }
    }
  }
  return goodStations;
}
=======
      }
    }
  }
  return goodStations;

}

>>>>>>> 1d733a5fd1d73d113fd508dd1dfb33bf060f5f54
