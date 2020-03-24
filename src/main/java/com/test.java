package com;

import com.atlassian.jira.component.ComponentAccessor;
import com.atlassian.jira.issue.IssueManager;
import com.atlassian.jira.issue.MutableIssue;
import com.atlassian.jira.issue.changehistory.ChangeHistoryManager;
import com.atlassian.jira.security.JiraAuthenticationContext;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import com.atlassian.templaterenderer.TemplateRenderer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Scanned
public class test extends HttpServlet {

    @JiraImport
    private TemplateRenderer templateRenderer;
    @JiraImport
    private  JiraAuthenticationContext authenticationContext;
    private final Logger logger = LoggerFactory.getLogger(test.class);// The transition ID

    private static final String TEST = "/templates/test.vm";

    public test( TemplateRenderer templateRenderer,
        JiraAuthenticationContext authenticationContext) {
        this.templateRenderer = templateRenderer;
        this.authenticationContext = authenticationContext;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Map<String, Object> context = new HashMap<>();
        ChangeHistoryManager changeHistoryManager= ComponentAccessor.getChangeHistoryManager();
        IssueManager issueManager = ComponentAccessor.getIssueManager();
        MutableIssue issue = issueManager.getIssueObject("ZRE-34");
        changeHistoryManager.getChangeItemsForField(issue,"customfield_11103");


        long createdDateDiff = System.currentTimeMillis() - issue.getCreated().getTime();

        resp.setContentType("text/html;charset=utf-8");
        templateRenderer.render(TEST,context,resp.getWriter());

    }
}