import vars from "../_vars.js";

if (vars.map) {
  ymaps.ready(init);

  function init() {
    const map = new ymaps.Map("map", {
      center: [59.935778, 30.314865],
      zoom: 12,
    });

    const markers = {};

    markers["primorsky"] = new ymaps.Placemark(
      [60.007443, 30.260065],
      {
        hintContent: "Reel to Real Приморский",
        balloonContent:
          "г. Санкт-Петербург, Комендантская площадь, 1 лит А​-3-6 этаж",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/marker.svg",
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -24],
      }
    );

    markers["ladozhsky"] = new ymaps.Placemark(
      [59.929957, 30.433296],
      {
        hintContent: "Reel to Real Ладожский",
        balloonContent: "г. Санкт-Петербург, Заневский проспект, 65 к1 лит А",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/marker.svg",
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -24],
      }
    );

    markers["kalininsky"] = new ymaps.Placemark(
      [60.010987, 30.40048],
      {
        hintContent: "Reel to Real Калининский",
        balloonContent: "г. Санкт-Петербург, Проспект Науки, 21 к1​",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/marker.svg",
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -24],
      }
    );

    for (const key in markers) {
      map.geoObjects.add(markers[key]);
    }

    vars.shopsContentBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const shop = e.currentTarget.dataset.shop;

        vars.shopsTabsBtns.forEach(btn => { btn.classList.remove("shops-content__button--active"); });
        document.querySelector('.shops-content__button[data-tab="map"').classList.add("shops-content__button--active");

        vars.shopsTabsContents.forEach((btn) => {
          btn.classList.remove("shops-content__tab-mob--active");
        });

        document
          .querySelector(`.shops-content__tab-mob[data-target="map"]`)
          .classList.add("shops-content__tab-mob--active");

        const marker = markers[shop];

        if (marker) {
          map.panTo(marker.geometry.getCoordinates(), {
            flying: true
          });

          marker.balloon.open();
        }
      });
    });
  }
}
