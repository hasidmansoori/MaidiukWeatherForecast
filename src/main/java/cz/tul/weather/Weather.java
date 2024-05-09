package cz.tul.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Weather {
    // Вложенные модели, например Condition, можно также оформить в виде внутренних классов или отдельных классов
    public static class Condition {
        public String text;
        public String icon;
        public int code;
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getIcon() {
			return icon;
		}
		public void setIcon(String icon) {
			this.icon = icon;
		}
		public int getCode() {
			return code;
		}
		public void setCode(int code) {
			this.code = code;
		}
       
        
    }

   
    private Location location;
    private Current current;
    
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public Current getCurrent() {
		return current;
	}
	public void setCurrent(Current current) {
		this.current = current;
	}
    
    
    
    
}