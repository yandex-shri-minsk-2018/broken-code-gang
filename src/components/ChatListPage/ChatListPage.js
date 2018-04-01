import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ChatListPage.css';

import Header from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { FooterNav } from '../FooterNav/FooterNav';

export function ChatListPage(props) {
    return (
      <div className="ChatListPage">
          <Header buttonExit="true" buttonHeaderRight="true" />
          <ChatList />
          <FooterNav active="chat" />
        </div>
    );
}

export default connect()(ChatListPage);
