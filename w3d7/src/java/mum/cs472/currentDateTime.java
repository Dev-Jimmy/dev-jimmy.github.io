/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mum.cs472;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author
 */
public class currentDateTime extends SimpleTagSupport {

    private String color;
    private String size;

    //This is called from JSP servlet to render custom tag
    @Override
    public void doTag() throws JspException, IOException {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        System.out.println("Current Date: " + ft.format(dNow));

        JspWriter out = getJspContext().getOut();
        out.write(String.format("<span style='color: %s; font-size: %S;'>%s</span>", color, size, ft.format(dNow)));

    }

    //Need a setter for each attribute of custom tag
    /**
     * @param color the color to set
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * @param size the size to set
     */
    public void setSize(String size) {
        this.size = size;
    }

}
