import { defineStore } from "pinia";
import type { City, State } from "@/interfaces/city"; 
// import axios from "axios";


export const useWeatherStore = defineStore("weather", {
	state: (): State => {
		return {
			cityList: new Map<string, City>(),
			selectedCity: { name: "", q: "", },
			isLoading: true,
			weatherDescription: "",
			weatherTemperature: 0,
		};
	},
	
	getters: {
	},
	
	actions: {
		prepareCityList() {
			this.cityList.set("Osaka",
				{ name: "大阪", q: "Osaka" }
			);

			this.cityList.set("Kobe",
				{ name: "神戸", q: "Kobe" }
			);

			this.cityList.set("Himeji",
				{ name: "姫路", q: "Himeji" }
			);
			
			this.cityList.set("Aichi",
				{ name: "愛知", q: "Aichi" }
			);

			this.cityList.set("Shizuoka",
				{ name: "静岡", q: "Shizuoka" }
			);
		},

		async reciveWeatherInfo(id: string) {
			this.isLoading = true;
			this.selectedCity = this.cityList.get(id) as City;
			const WeatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
			const params: {
				lang: string,
				q: string,
				appid: string,
				units: string,
			} = {
				lang: "ja",
				q: this.selectedCity.q,
				appid: "9d4f3ad1591ee25e7bb8a7429ee2ee11",
				units: "metric",
			};
			const queryParams = new URLSearchParams(params);
			const urlFull = `${WeatherInfoUrl}?${queryParams}`;
			console.log(urlFull);
			const response = await fetch(urlFull, {method: "GET"});
			const weatherInfoJSON = await response.json();
			// const response = await axios.get(urlFull);
			// const weatherInfoJSON = await response.data;
			const weatherArry = weatherInfoJSON.weather;
			const weather = weatherArry[0];
			this.weatherDescription = weather.description;
			this.weatherTemperature = weatherInfoJSON.main.temp;
			this.isLoading = false;
		}
	}
});
