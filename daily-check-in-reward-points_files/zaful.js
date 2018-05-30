var rr_rating_widget = {
    unique_id: new Date().getTime(),
    div_id:"RR_Ratings_Widget_Wrapper",
    unique_div_id:"RR_Ratings_Widget_",
    version:"alt1",
    div_width:"",
    div_height:"",
    css_path:"https://widget.resellerratings.com/widget/css/",
    merchant_id:"769482",
    merchant_name:["zaful"],
    merchant_image:"zaful.png",
    merchant_rating_score:"9.29",
    merchant_max_rating:"10",
    merchant_total_reviews:"3,835",
    merchant_url:"https://www.resellerratings.com/store/zaful",
    
    init:function(rr_rating_setup)
    {
        this.unique_div_id += this.unique_id;
        var rr_rating_div;
        // Div ID passed, check if in the DOM or write it
        if (typeof rr_rating_setup != 'undefined' && rr_rating_setup['div'].length > 0)
        {
            var new_div_id = rr_rating_setup['div'];
            if (typeof rr_rating_setup['class'] != 'undefined' && rr_rating_setup['class'].length > 0)
            {
                this.version = rr_rating_setup['class'];
            }
            
            rr_rating_div = this._find('#'+new_div_id);
            if (typeof rr_rating_div[0] == 'undefined')
            {
                document.write('<div id="' + new_div_id + '" class="'+this.version+'"></div>');
                rr_rating_div = this._find('#'+new_div_id);
            }
            this.div_id = new_div_id;
        }
        else
        {
            // check for default id, or else write unique id
            rr_rating_div = this._find('#'+this.div_id);
            if (typeof rr_rating_div[0] == 'undefined')
            {
                document.write('<div id="' + this.unique_div_id + '" class="'+this.version+'"></div>');
                rr_rating_div = this._find('#'+this.unique_div_id);
                this.div_id = this.unique_div_id;
            }
        }

        for (var i = 0; i < rr_rating_div.length; i++)
        {
            this._write_rr_rating_div(rr_rating_div[i]);
        }
            },
    
    _write_rr_rating_div:function(target_div)
    {
        if (!target_div.innerHTML)
        {
            this._include_css("rating.css");
            this._style_div(target_div);
            var star_rating = this._get_star_rating();
            var html = this._build_rr_rating_div(star_rating);
            target_div.appendChild(html);
        }
    },
    
    _get_star_rating:function()
    {
        if (typeof this.merchant_rating_score != 'undefined' && parseInt(this.merchant_rating_score) > 0
                && typeof this.merchant_max_rating != 'undefined' && parseInt(this.merchant_max_rating) > 0)
        {
            var score = parseFloat(this.merchant_rating_score);
            var max = parseInt(this.merchant_max_rating);
            var rating = Math.round((score/max) * 100);
            
            return rating;
        }
        
        return "0";
    },

    click_event: (function() {}),
    
    _build_rr_rating_div:function(star_rating)
    {
        // build html elements
        var widget = this._create('div', {'id': "RR_Ratings_Widget"}),
            link_wrapper = this._create('a', {
                'onclick': 'rr_rating_widget.click_event()',
                'href': this.merchant_url,
                'target': '_blank'
            }),
            frame = this._create('div', {'id': "RR_Ratings_Widget_frame"}),
        
            head = this._create('div', {'id': "RR_Ratings_Widget_head"}),
            style = {'font-size':'15px'},
            clss = "rr_rate_company_name text";

        if ("false" == "true") {
            style['background-image'] = 'url(https://widget.resellerratings.com/images/widget/merchants/'+this.merchant_image+')';
            style['background-repeat'] = 'no-repeat';
            clss = "rr_rate_company_name";
        }
        var merchant = this._create('div', {'class': clss, 'style': style }, this.merchant_name.join("\n")),
        
            body = this._create('div', {'id': "RR_Ratings_Widget_content"});
        
            rate_wrapper = this._create('div', {'class': "rr_rate_rating_wrapper"}),
            is_rated = this._create('span', {'class': "rr_rate_star_text"}, "is rated "),
            star_wrapper = this._create('div', {'class': "rr_rate_star_wrapper"}),
            star_empty = this._create('div', {'class': "rr_rate_star_rating_empty"}),
            star_full = this._create('div', {'class': "rr_rate_star_rating_full", 'style': {'width': star_rating + "%"} }),
            rate_total = this._create('div', {'class': "rr_review_count"}, this.merchant_total_reviews + " reviews"),
            rate_clear = this._create('div', {'class': "rr_clear_both"}),
        
            footer = this._create('div', {'id': "RR_Ratings_Widget_footer"}),
            footer_link = this._create('a', {'href': this.merchant_url, 'class': "rr_href", 'target': '_blank'}, "resellerratings.com link"),
        
            stamp = this._create('div', {'class': "rr_review_stamp_wrapper"}),
            date_stamp = this._create( 'div', {'class': "rr_review_stamp_date"}, this._get_date() ),

        // place the elements
        head.appendChild(merchant);
        body.appendChild(rate_wrapper).appendChild(is_rated);
        
        rate_wrapper.appendChild(star_wrapper);
        star_wrapper.appendChild(star_empty);
        star_wrapper.appendChild(star_full);
        
        body.appendChild(rate_total);
        body.appendChild(rate_clear);
        footer.appendChild(footer_link);
        
        stamp.appendChild(date_stamp);
        
        frame.appendChild(head);
        frame.appendChild(body);
        frame.appendChild(footer);
        frame.appendChild(stamp);
        
        link_wrapper.appendChild(frame);
        widget.appendChild(link_wrapper);
        
        return widget;
    },
    
    _style_div:function(target_div)
    {
        if (this.div_height.length > 0)
            target_div.style.height = this.div_height;
        
        if (this.div_width.length > 0)
            target_div.style.width = this.div_width;
    },
    
    _include_css:function(css_file)
    {
        var css_href = this.css_path + css_file;
        var head = this._find("head")[0];
        var links = this._find("link", head);
        for (var i = 0; i < links.length; i++)
        {
            link = links[i];
            if (link.nodeName == "LINK" && link.href == css_href)
            {
                return false;
            }
        }
        link = this._create('link',{
            'href': css_href,
            'rel': "stylesheet",
            'type': "text/css"
        });
        head.appendChild(link);
    },
    
    _get_date:function()
    {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
    
        return mm+'/'+dd+'/'+yyyy;
        
    },
    
    _create:function(tag_type, attributes, text_content){
        var el = document.createElement(tag_type),
            styles = attributes['style'] || [],
            i,
            x,
            style_string = '';

        delete attributes['style'];

        for (i in attributes) {
            if (attributes.hasOwnProperty(i)){
                el.setAttribute(i, attributes[i]);
            }
        }

        for (x in styles) {
            if (styles.hasOwnProperty(x)) {
                style_string += x+':'+styles[x]+';';
            }
        }

        if (style_string) {
            el.setAttribute('style', style_string);
        }
        
        if ('undefined' !== typeof text_content ) {
            if ('innerText' in el) {
                el.innerText = text_content;
            } else {
               el.textContent = text_content;
            }
        }
        return el;
    },
    
    _find:function(selector, root)
    {
        if (!selector || typeof selector == 'undefined') return [];
        if (!root || typeof root == 'undefined') root = document;
                    
        if (document.querySelectorAll)
        {
            return root.querySelectorAll(selector);
        }
        else
        {
            var elements = null;
            if (selector.indexOf('#') !== -1)    // ID 
            {
                var id = null;
                
                if (selector.indexOf('#') > 0)
                {
                    var parts = selector.split('#');
                    id = parts[1];
                }
                else
                {
                    id = selector.substr(1);
                }
                
                elements = root.getElementById(id);
                if (elements) return [elements];
                
            }
            else if (selector.indexOf('.') !== -1)    // Class
            {
                var tag = null;
                var classname = null;
                
                if (selector.indexOf('.') > 0)
                {
                    var parts = selector.split('.');
                    tag = parts[0];
                    classname = parts[1];
                }
                else
                {
                    tag = '*';
                    classname = selector.substr(1);
                }
                
                return this._find_by_class(root, tag, classname);
            }
            else    // Tag
            {
                return root.getElementsByTagName(selector);
            }
        }
        
        return [];
    },
    
    _find_by_class:function(node, tag, classname)
    {
        if (node.getElementsByClassName)    // use native implementation if available
        {
            return node.getElementsByClassName(classname);
        }
        else
        {
            return (function getElementsByClass(node, tag, searchClass) {

                if ( node == null )
                    node = document;
                var classElements = [],
                    els = node.getElementsByTagName(tag),
                    elsLen = els.length,
                    pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;
                for (var i = 0, j = 0; i < elsLen; i++)
                {
                    if ( pattern.test(els[i].className) )
                    {
                        classElements[j] = els[i];
                        j++;
                    }
                }
                return classElements;
            })(node, tag, classname);
        }
    }

};

(function() {
    if(typeof rr_rating_widget_setup != 'undefined'){
        rr_rating_widget.init(rr_rating_widget_setup);
        rr_rating_widget_setup = null; // Leave this out for garbage collection
    }else{
        rr_rating_widget.init();
    }
})();
