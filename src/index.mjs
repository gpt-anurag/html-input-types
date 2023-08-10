import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>All Input Types</h1>
<div>
  <form>
    <p>
      <lable for="input_1">
        Button: 
        <input type="button" id="input_1" value="Input Button"/>
      </label>  
    </p>
    <p>
      <lable for="input_2">
        <input type="checkbox" id="input_2" value="checkbox_value" name="checkbox_name"/>
        Checkbox 
      </label>  
    </p>
    <p>
      <lable for="input_3">
        Color: 
        <input type="color" id="input_3" />
      </label>  
    </p>
    <p>
      <lable for="input_4">
        Date: 
        <input type="date" id="input_4" />
      </label>  
    </p>
    <p>
      <lable for="input_5">
        Datetime: 
        <input type="datetime" id="input_5" />
      </label>  
    </p>
    <p>
      <lable for="input_6">
        Datetime local: 
        <input type="datetime-local" id="input_6" />
      </label>  
    </p>
    <p>
      <lable for="input_7">
        Email: 
        <input type="email" id="input_7" />
      </label>  
    </p>
    <p>
      <lable for="input_8">
        File: 
        <input type="file" id="input_8" />
      </label>  
    </p>
  
    <p>
      <lable for="input_9">
        Hidden: 
        <input type="hidden" id="input_9" />
      </label>  
    </p>
    <p>
      <lable for="input_10">
        Image: 
        <input type="image" id="input_10" />
      </label>  
    </p>
    <p>
      <lable for="input_11">
        month: 
        <input type="month" id="input_11" />
      </label>  
    </p>
    <p>
      <lable for="input_12">
        number: 
        <input type="number" id="input_12" />
      </label>  
    </p>
    <p>
      <lable for="input_13">
        Password: 
        <input type="password" id="input_13" />
      </label>  
    </p>
    <p>
      <lable for="input_14">
        Radio: 
        <input type="radio" id="input_14" />
      </label>  
    </p>
    <p>
      <lable for="input_15">
        Range: 
        <input type="range" id="input_15" min="10" max="100" />
      </label>  
    </p>
    <p>
      <lable for="input_16">
        reset: 
        <input type="reset" id="input_16" />
      </label>  
    </p>
    <p>
      <lable for="input_17">
        Search: 
        <input type="search" id="input_17" />
      </label>  
    </p>
    <p>
      <lable for="input_18">
        Submit: 
        <input type="submit" id="input_18" />
      </label>  
    </p>
    <p>
    <lable for="input_19">
      Tel: 
      <input type="tel" id="input_19" />
    </label>  
  </p>
  <p>
      <lable for="input_20">
        Text: 
        <input type="text" id="input_20" />
      </label>  
    </p>
    <p>
      <lable for="input_21">
        URL: 
        <input type="url" id="input_21" />
      </label>  
    </p>
    <p>
      <lable for="input_22">
        Week: 
        <input type="week" id="input_22" />
      </label>  
    </p>
  </form>
</div>
`;
