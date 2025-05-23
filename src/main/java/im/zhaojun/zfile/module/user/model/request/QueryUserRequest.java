package im.zhaojun.zfile.module.user.model.request;

import cn.hutool.core.date.DateUtil;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

/**
 * @author zhaojun
 */
@Data
public class QueryUserRequest {

	@Schema(name="用户名")
	private String username;

	@Schema(name="昵称")
	private String nickname;

	@Schema(name="是否启用")
	private Boolean enable;

	@Schema(name="创建时间")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private List<Date> searchDate;

	@Schema(name="排序字段")
	private String sortField = "id";

	@Schema(name="排序方式")
	private Boolean sortAsc = true;

	@Schema(name="是否隐藏未启用的存储源")
	private Boolean hideDisabledStorage;

	public Date getDateFrom() {
		if (searchDate == null) {
			return null;
		}
		return DateUtil.beginOfDay(searchDate.getFirst());
	}

	public Date getDateTo() {
		if (searchDate == null) {
			return null;
		}
		return DateUtil.endOfDay(searchDate.getLast());
	}

}