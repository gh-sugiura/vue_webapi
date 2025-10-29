import { defineStore } from "pinia";
import type { City, State } from "@/interfaces/city"; 


export const useWeatherStore = defineStore("weather", {
	state: (): State => {
		return {
			cityList: new Map<string, City>(),
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
		}
	}
});
