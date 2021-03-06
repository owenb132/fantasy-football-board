(function() {
  'use strict';

  const app = angular.module('ffReddit');

  app.controller('newCommentController', function($rootScope) {
    this.showCommentForm = false;

    this.submit = function(id, form) {
      let newComment = {};
      newComment.author = this.author;
      newComment.text = this.text;
      let postID = parseInt(id);

      let currentPost = $rootScope.posts.filter(post => {
        return post.id === postID;
      })[0];

      currentPost.comments.push(newComment);

      this.author = '';
      this.text = '';
      form.$setPristine();
      form.$setUntouched();
      this.showCommentForm = false;

    };

  });

}());
