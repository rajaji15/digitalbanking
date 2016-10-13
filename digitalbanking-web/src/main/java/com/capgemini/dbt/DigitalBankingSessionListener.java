package com.capgemini.dbt;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class DigitalBankingSessionListener implements HttpSessionListener {

	private static int totalActiveSessions;

	public static int getTotalActiveSession() {
		return totalActiveSessions;
	}

	public void sessionCreated(HttpSessionEvent arg0) {
		System.out.println("DigitalBankingSessionListener: Session Created");
		totalActiveSessions++;
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent arg0) {
		totalActiveSessions--;
	}

}
