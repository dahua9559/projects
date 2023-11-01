package com.game.server;

import com.universe.crypto.CryptoUtils;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MyWebSocketServerHandler extends SimpleChannelInboundHandler<TextWebSocketFrame> {

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, TextWebSocketFrame msg) throws Exception {
        System.out.println("服务器接受消息：" + msg.text());
        String secretKey = "sQPoC/1do9BZMkg8I5c09A==";
        String plainText = "hello world";
        System.out.println("解密后的明文为：" + CryptoUtils.decryptSymmetrically(secretKey, null, msg.text(), CryptoUtils.Algorithm.Encryption.AES_ECB_PKCS5));
        ctx.channel().writeAndFlush(new TextWebSocketFrame(CryptoUtils.encryptSymmetrically(secretKey, null, plainText, CryptoUtils.Algorithm.Encryption.AES_ECB_PKCS5)));
    }

    @Override
    public void handlerAdded(ChannelHandlerContext ctx) throws Exception {
        System.out.println("handlerAdded被调用：" + ctx.channel().id().asLongText());
        System.out.println("handlerAdded被调用：" + ctx.channel().id().asShortText());
        System.out.println(sdf.format(new Date()) + "  【服务器】用户已连接！");
    }

    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        System.out.println("handlerRemoved被调用：" + ctx.channel().id().asLongText());
        System.out.println(sdf.format(new Date()) + "  【服务器】用户已断开连接");
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println("发生异常：" + cause.getMessage());
        ctx.close();
    }
}
