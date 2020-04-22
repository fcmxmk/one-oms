# -*- coding: utf-8 -*-
# author: timor

from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from systems.models import *
from common.models import BaseModel

menu_type = (
    (1, '模块'),
    (2, '菜单'),
    (3, '操作'),
)

operate_type = (
    ('none', '无'),
    ('add', '新增'),
    ('del', '删除'),
    ('update', '编辑'),
    ('view', '查看'),
)


class Menu(BaseModel):
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, default='0',
                               verbose_name='父级菜单')
    name = models.CharField(max_length=32, verbose_name='菜单名称')
    code = models.CharField(max_length=32, verbose_name='菜单代码')
    curl = models.CharField(max_length=101, verbose_name='菜单URL')
    icon = models.CharField(max_length=32, blank=True, verbose_name='菜单图标')
    hidden = models.BooleanField(default=False, verbose_name='菜单是否隐藏')
    sequence = models.SmallIntegerField(default=0, verbose_name='排序值')
    type = models.CharField(max_length=1, choices=menu_type, default=2, verbose_name='菜单类型')
    status = models.BooleanField(default=True, verbose_name='状态')
    operate = models.CharField(max_length=11, choices=operate_type, default='none', verbose_name='操作类型')

    def __str__(self):
        return "{parent}{name}".format(name=self.name, parent="%s-->" % self.parent.name if self.parent else '')

    class Meta:
        ordering = ['id', ]
        verbose_name = '角色'
        verbose_name_plural = verbose_name


class Role(BaseModel):
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, default='0',
                               verbose_name='父级角色')
    name = models.CharField(max_length=32, unique=True, verbose_name='名称')
    code = models.CharField(max_length=32, unique=True, verbose_name='代码')
    sequence = models.SmallIntegerField(default=0, verbose_name='排序值')
    menus = models.ManyToManyField(Menu, blank=True, verbose_name='菜单')
    model_perms = models.ManyToManyField(Permission, blank=True, verbose_name='model权限')

    def __str__(self):
        return "{parent}{name}".format(name=self.name, parent="%s-->" % self.parent.name if self.parent else '')

    class Meta:
        verbose_name = '角色'
        verbose_name_plural = verbose_name


class PermissionsMixin(models.Model):
    roles = models.ManyToManyField(
        Role,
        verbose_name='roles',
        blank=True,
        related_name="user_set",
        related_query_name="user",
    )
    model_perms = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        related_name="user_set",
        related_query_name="user",
    )

    class Meta:
        abstract = True

    def get_user_permissions(self, obj=None):
        """
        Return a list of permission strings that this user has directly.
        Query all available auth backends. If an object is passed in,
        return only permissions matching this object.
        """
        return _user_get_permissions(self, obj, 'user')

    def get_group_permissions(self, obj=None):
        """
        Return a list of permission strings that this user has through their
        groups. Query all available auth backends. If an object is passed in,
        return only permissions matching this object.
        """
        return _user_get_permissions(self, obj, 'group')

    def get_all_permissions(self, obj=None):
        return _user_get_permissions(self, obj, 'all')

    def has_perm(self, perm, obj=None):
        """
        Return True if the user has the specified permission. Query all
        available auth backends, but return immediately if any backend returns
        True. Thus, a user who has permission from a single auth backend is
        assumed to have permission in general. If an object is provided, check
        permissions for that object.
        """
        # Active superusers have all permissions.
        if self.status and self.is_admin:
            return True

        # Otherwise we need to check the backends.
        return _user_has_perm(self, perm, obj)

    def has_perms(self, perm_list, obj=None):
        """
        Return True if the user has each of the specified permissions. If
        object is passed, check if the user has all required perms for it.
        """
        return all(self.has_perm(perm, obj) for perm in perm_list)

    def has_module_perms(self, app_label):
        """
        Return True if the user has any permissions in the given app label.
        Use similar logic as has_perm(), above.
        """
        # Active superusers have all permissions.
        if self.status and self.is_admin:
            return True

        return _user_has_module_perms(self, app_label)


class UserManager(BaseUserManager):
    def create_user(self, username, password=None):
        """
        username 是唯一标识，没有会报错
        """

        if not username:
            raise ValueError('Users must have an username')

        user = self.model(
            username=username,
        )
        user.set_password(password)  # 检测密码合理性
        user.save(using=self._db)  # 保存密码
        return user

    def create_superuser(self, username, password):
        user = self.create_user(username=username,
                                password=password,
                                )
        user.is_admin = True  # 比创建用户多的一个字段
        user.save(using=self._db)
        return user


class User(BaseModel, PermissionsMixin, AbstractBaseUser):
    username = models.CharField(max_length=32, unique=True, db_index=True)
    realname = models.CharField(max_length=32, default="图书馆管理员", blank=True, verbose_name='真实名字')
    email = models.EmailField(blank=True, default="itimor@126.com", verbose_name='邮箱')
    avatar = models.CharField(max_length=255, default='http://m.imeitou.com/uploads/allimg/2017110610/b3c433vwhsk.jpg')
    status = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'  # 必须有一个唯一标识--USERNAME_FIELD

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = '用户'
        verbose_name_plural = '用户'

    objects = UserManager()  # 创建用户
