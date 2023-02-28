

class AdaAccordion{
    constructor(accordion){
        this.accordion  = accordion;
        this.initiateAccordion();
    }

    getAccordionItems(){
        let items = document.querySelectorAll(this.accordion+" .ada-accordion--item"); 
        if(!items){
            return console.log("Cannot find "+ this.accordion+" .ada-accordion--item")
        }else{
            return items;
        }
        
    }

    toggleTrueFalse(val){
        return val == "true" ? val = "false" : val = "true";
    }

    toggleAriaHidden(panel){
        let val = panel.getAttribute("aria-hidden");
        panel.setAttribute("aria-hidden",toggleTrueFalse(val));
    }

    toggleAriaExpanded(btn){
        let val = btn.getAttribute("aria-expanded");
        btn.setAttribute("aria-expanded", toggleTrueFalse(val));
        let panel = btn.nextElementSibling;
        toggleAriaHidden(panel);
    }

    checkAttributeAndAdd(el,att){ 
        if(!el.hasAttribute(att)){
            el.setAttribute(att,"false");
        }
    }

    addAriaControlToButton(btn, i){
        btn.setAttribute("aria-controls", "accordian-panel-"+i);
    }

    addAriaIdToBtn(btn, i){
        btn.setAttribute("id", "accordian-btn-"+i);
    }

    addAriaIdToPanel(panel, i){
        panel.setAttribute("id", "accordion-content-"+i);
    }

    addAriaLableByToPanel(panel, i){
        panel.setAttribute("aria-labelledby", "accordion-btn-"+i);
    }

    addAriaAttributesToElements(item,index){
        let panel = item.querySelector("button + *");
        let btn = item.querySelector("button");
        this.checkAttributeAndAdd(btn,"aria-expanded");
        this.addAriaIdToBtn(btn, index);
        //addAriaControl(btn, index);
        this.addAriaControlToButton(btn, index);
        this.addAriaIdToPanel(panel, index);
        this.addEventToBtns(btn);
    }

    addEventToBtns(btn){
        btn.addEventListener("click", function(){
            this.toggleAriaExpanded(btn);
        })
    }

    setupAriaItems(item,index){
        addAriaAttributesToElements(item,index);
        addEventToBtns(item.querySelector("button"));
    }

    initiateAccordion(){
        this.getAccordionItems().forEach( function(item, index){
			// this.setupAriaItems(item, index);
            // console.log(item, index);
            this.addAriaAttributesToElements(item,index);
            addEventToBtns(item.querySelector("button"));
		});
        return console.log("initiate");
    }

    
}
		